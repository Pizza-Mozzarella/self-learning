// Công cụ cho notes/ (thư mục lồng nhau). Chỉ cần Node, không cài gì thêm.
//   node tools/notes.js index [root]   sinh INDEX.md từ frontmatter
//   node tools/notes.js check [root]   kiểm tra format, link, README từng thư mục, INDEX (lỗi -> exit 1)
const fs = require("fs");
const path = require("path");

const REQUIRED = ["title", "tags", "status", "verified"];
const STATUS = ["stub", "draft", "ok"];
const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*\.md$/;

const [cmd, rootArg] = process.argv.slice(2);
const root = path.resolve(rootArg || path.join(__dirname, ".."));
const notesDir = path.join(root, "notes");
const rel = (p) => path.relative(root, p).split(path.sep).join("/");

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".md") && e.name !== "README.md") out.push(p);
  }
  return out;
}

function parse(file) {
  const text = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
  const m = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return null;
  const meta = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  const grab = (label) => (m[2].match(new RegExp(`^\\*\\*${label}:\\*\\*[ \\t]*(.*)$`, "m")) || [])[1]?.trim() || "";
  meta._one = grab("Một câu");
  meta._question = grab("Câu hỏi");
  meta._tags = (meta.tags || "").replace(/^\[|\]$/g, "").split(",").map((t) => t.trim()).filter(Boolean);
  return { meta, body: m[2] };
}

function buildIndex() {
  const groups = {}, stubs = [];
  for (const f of walk(notesDir)) {
    const n = parse(f);
    if (!n) continue;
    const { meta } = n;
    const link = `[${meta.title || path.basename(f)}](${rel(f)})`;
    if (meta.status === "stub") { stubs.push(`- ${link} — ${meta._question}`); continue; }
    let mark = meta.status === "ok" ? "" : " *(draft)*";
    if ((meta.verified || "").startsWith("yes")) mark += " ✔";
    for (const tag of meta._tags.length ? meta._tags : ["no-tag"]) (groups[tag] ||= []).push(`- ${link} — ${meta._one}${mark}`);
  }
  const out = ["# Index", "", "_Tự sinh bằng `node tools/notes.js index`, đừng sửa tay._", ""];
  const tags = Object.keys(groups).sort();
  if (!tags.length && !stubs.length) out.push("(chưa có note)");
  for (const t of tags) out.push(`## ${t}`, "", ...groups[t], "");
  if (stubs.length) out.push("## Chưa khám phá (stub)", "", ...stubs, "");
  return out.join("\n").trimEnd() + "\n";
}

function check() {
  const errors = [], warnings = [];
  const files = walk(notesDir);
  const dirs = new Map();
  for (const f of files) {
    const name = rel(f);
    if (!SLUG.test(path.basename(f))) errors.push(`${name}: tên file phải là slug chữ thường nối bằng gạch ngang`);
    (dirs.get(path.dirname(f)) || dirs.set(path.dirname(f), []).get(path.dirname(f))).push(f);
    const n = parse(f);
    if (!n) { errors.push(`${name}: thiếu frontmatter`); continue; }
    const { meta, body } = n;
    for (const k of REQUIRED) if (!meta[k]) errors.push(`${name}: thiếu '${k}'`);
    if (meta.status && !STATUS.includes(meta.status)) errors.push(`${name}: status phải là ${STATUS.join("|")}`);
    if (meta.verified && !/^(no|yes)\b/.test(meta.verified)) errors.push(`${name}: verified phải bắt đầu bằng no hoặc yes`);
    if (meta.status === "stub") {
      if (!meta._question) errors.push(`${name}: stub cần dòng 'Câu hỏi'`);
      if (meta._one) errors.push(`${name}: stub không được có 'Một câu' (đó là câu chốt của người học, không điền hộ)`);
    } else if (!meta._one || meta._one.startsWith("<")) {
      errors.push(`${name}: chưa có 'Một câu'`);
    } else if (/\svà\s/.test(meta._one)) {
      warnings.push(`${name}: 'Một câu' có chữ 'và', cân nhắc tách thành hai note`);
    }
    for (const m of body.matchAll(/\]\(([^)\s]+)\)/g)) {
      const href = m[1].split("#")[0];
      if (!href || /^(https?:|mailto:)/.test(href)) continue;
      if (!fs.existsSync(path.resolve(path.dirname(f), href))) errors.push(`${name}: link hỏng -> ${m[1]}`);
    }
  }
  for (const [dir, list] of dirs) {
    const readme = path.join(dir, "README.md");
    if (!fs.existsSync(readme)) { errors.push(`${rel(dir)}/: thiếu README.md (hub của thư mục)`); continue; }
    const text = fs.readFileSync(readme, "utf8");
    const linked = new Set([...text.matchAll(/\]\(([^)\s]+)\)/g)].map((m) => path.resolve(dir, m[1].split("#")[0])));
    for (const f of list) if (!linked.has(f)) errors.push(`${rel(readme)}: chưa liệt kê ${path.basename(f)}`);
  }
  const idx = path.join(root, "INDEX.md");
  const cur = fs.existsSync(idx) ? fs.readFileSync(idx, "utf8").replace(/\r\n/g, "\n") : null;
  if (cur !== buildIndex()) errors.push("INDEX.md cũ, chạy: node tools/notes.js index");
  warnings.forEach((w) => console.log("CẢNH BÁO", w));
  errors.forEach((e) => console.log("LỖI", e));
  console.log(`${files.length} note, ${errors.length} lỗi, ${warnings.length} cảnh báo`);
  process.exit(errors.length ? 1 : 0);
}

if (cmd === "index") {
  fs.writeFileSync(path.join(root, "INDEX.md"), buildIndex(), "utf8");
  console.log("INDEX.md đã cập nhật");
} else if (cmd === "check") {
  check();
} else {
  console.log("Dùng: node tools/notes.js index|check [root]");
  process.exit(2);
}
