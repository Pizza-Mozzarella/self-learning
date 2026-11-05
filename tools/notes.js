// Công cụ cho notes/ (thư mục lồng nhau). Chỉ cần Node, không cài gì thêm.
//   node tools/notes.js index [root]   sinh INDEX.md (cây theo thư mục) từ frontmatter
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
const mapLib = require("./map");

// Dữ kiện để vẽ sơ đồ: thông tin note, các cạnh từ link, và các README cần có sơ đồ.
function mapContext() {
  const info = new Map();
  for (const f of walk(notesDir)) {
    const n = parse(f);
    if (n) info.set(f, { title: n.meta.title || path.basename(f), status: n.meta.status || "draft", body: n.body });
  }
  const hubs = [...new Set([...info.keys()].map((f) => path.dirname(f)))].map((d) => path.join(d, "README.md"));
  const tops = ["README.md", "backend/README.md"].map((r) => path.join(notesDir, r));
  const readmes = [...new Set([...hubs, ...tops])].filter((p) => fs.existsSync(p) && (hubs.includes(p) || fs.readFileSync(p, "utf8").includes("<!-- tree:start -->")));
  return { notesDir, info, readmes, edges: mapLib.collectEdges(info) };
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".md") && e.name !== "README.md" && e.name !== "glossary.md") out.push(p);
  }
  return out;
}

// glossary.md là catalog thuật ngữ của một chủ đề: không phải note, mỗi thuật ngữ là một mục "### Tên".
function glossaries(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) glossaries(p, out);
    else if (e.name === "glossary.md") out.push(p);
  }
  return out.sort();
}

const slug = (h) => h.trim().toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, "").replace(/\s+/g, "-");
const anchorCache = new Map();
function anchorsOf(file) {
  if (!anchorCache.has(file)) {
    const set = new Set();
    for (const m of fs.readFileSync(file, "utf8").matchAll(/^#{1,6}\s+(.+)$/gm)) set.add(slug(m[1]));
    anchorCache.set(file, set);
  }
  return anchorCache.get(file);
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
  const grab = (label) => (m[2].match(new RegExp(`^[*][*]${label}:[*][*](.*)$`, "m")) || [])[1]?.trim() || "";
  meta._one = grab("Một câu");
  meta._question = grab("Câu hỏi");
  meta._tags = (meta.tags || "").replace(/^\[|\]$/g, "").split(",").map((t) => t.trim()).filter(Boolean);
  return { meta, body: m[2] };
}

// INDEX.md là cây theo thư mục, giống hình cây ta nhớ trong đầu.
function buildIndex() {
  const tree = { dirs: {}, notes: [] };
  for (const f of walk(notesDir)) {
    const n = parse(f);
    if (!n) continue;
    let node = tree;
    for (const seg of path.relative(notesDir, path.dirname(f)).split(path.sep).filter(Boolean)) {
      node = node.dirs[seg] ||= { dirs: {}, notes: [], rel: [...(node.rel || []), seg] };
    }
    node.notes.push({ f, meta: n.meta });
  }
  for (const g of glossaries(notesDir)) {
    let node = tree;
    for (const seg of path.relative(notesDir, path.dirname(g)).split(path.sep).filter(Boolean)) {
      node = node.dirs[seg] ||= { dirs: {}, notes: [], rel: [...(node.rel || []), seg] };
    }
    node.gloss = { f: g, count: (fs.readFileSync(g, "utf8").match(/^### /gm) || []).length };
  }
  const out = ["# Index", "", "_Tự sinh bằng `node tools/notes.js index`, đừng sửa tay._", ""];
  const render = (node, depth) => {
    const pad = "  ".repeat(depth);
    if (node.gloss) out.push(`${pad}- [Thuật ngữ](${rel(node.gloss.f)}) — ${node.gloss.count} mục`);
    for (const { f, meta } of node.notes) {
      const link = `[${meta.title || path.basename(f)}](${rel(f)})`;
      if (meta.status === "stub") { out.push(`${pad}- ${link} *(stub)* — ${meta._question}`); continue; }
      let mark = meta.status === "ok" ? "" : " *(draft)*";
      if ((meta.verified || "").startsWith("yes")) mark += " ✔";
      out.push(`${pad}- ${link} — ${meta._one}${mark}`);
    }
    for (const d of Object.keys(node.dirs).sort()) {
      const sub = node.dirs[d];
      const readme = path.join(notesDir, ...sub.rel, "README.md");
      out.push(`${pad}- **${fs.existsSync(readme) ? `[${d}/](${rel(readme)})` : `${d}/`}**`);
      render(sub, depth + 1);
    }
  };
  render(tree, 0);
  if (!tree.notes.length && !Object.keys(tree.dirs).length) out.push("(chưa có note)");
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
      const [href, frag] = m[1].split("#");
      if (!href || /^(https?:|mailto:)/.test(href)) continue;
      const target = path.resolve(path.dirname(f), href);
      if (!fs.existsSync(target)) errors.push(`${name}: link hỏng -> ${m[1]}`);
      else if (frag && href.endsWith(".md") && !anchorsOf(target).has(frag)) errors.push(`${name}: neo không có trong file đích -> ${m[1]}`);
    }
  }
  for (const g of glossaries(notesDir)) {
    const seen = new Set();
    const text = fs.readFileSync(g, "utf8").replace(/\r\n/g, "\n");
    for (const sec of text.split(/^### /m).slice(1)) {
      const [title, ...rest] = sec.split("\n");
      if (seen.has(slug(title))) errors.push(`${rel(g)}: trùng thuật ngữ '${title.trim()}'`);
      seen.add(slug(title));
      if (!rest.join("").trim()) errors.push(`${rel(g)}: thuật ngữ '${title.trim()}' chưa có giải thích`);
    }
  }
  for (const [dir, list] of dirs) {
    const readme = path.join(dir, "README.md");
    if (!fs.existsSync(readme)) { errors.push(`${rel(dir)}/: thiếu README.md (hub của thư mục)`); continue; }
    const text = fs.readFileSync(readme, "utf8");
    const linked = new Set([...text.matchAll(/\]\(([^)\s]+)\)/g)].map((m) => path.resolve(dir, m[1].split("#")[0])));
    for (const f of list) if (!linked.has(f)) errors.push(`${rel(readme)}: chưa liệt kê ${path.basename(f)}`);
  }
  // link trong mọi README phải trỏ tới file có thật
  for (const readme of [...dirs.keys()].map((d) => path.join(d, "README.md")).concat(
    ["README.md", "backend/README.md"].map((r) => path.join(notesDir, r)))) {
    if (!fs.existsSync(readme)) continue;
    for (const m of fs.readFileSync(readme, "utf8").matchAll(/\]\(([^)\s]+)\)/g)) {
      const href = m[1].split("#")[0];
      if (!href || /^(https?:|mailto:)/.test(href)) continue;
      if (!fs.existsSync(path.resolve(path.dirname(readme), href))) errors.push(`${rel(readme)}: link hỏng -> ${m[1]}`);
    }
  }
  const idx = path.join(root, "INDEX.md");
  const cur = fs.existsSync(idx) ? fs.readFileSync(idx, "utf8").replace(/\r\n/g, "\n") : null;
  if (cur !== buildIndex()) errors.push("INDEX.md cũ, chạy: node tools/notes.js index");
  // Sơ đồ chỉ được vẽ từ dữ kiện thật: không có vòng mâu thuẫn, và README phải khớp với link hiện tại.
  const ctx = mapContext();
  for (const [kind, label] of [["dir", "Sâu hơn"], ["base", "Nền"]]) {
    for (const c of mapLib.findCycles(ctx.info, ctx.edges, kind)) errors.push(`vòng ${label} mâu thuẫn: ${c.map((f) => path.basename(f, ".md")).join(" -> ")}`);
  }
  for (const [readme, text] of mapLib.buildReadmes(ctx)) {
    if (fs.readFileSync(readme, "utf8").replace(/\r\n/g, "\n") !== text) errors.push(`${rel(readme)}: sơ đồ cũ, chạy: node tools/notes.js map`);
  }
  warnings.forEach((w) => console.log("CẢNH BÁO", w));
  errors.forEach((e) => console.log("LỖI", e));
  console.log(`${files.length} note, ${errors.length} lỗi, ${warnings.length} cảnh báo`);
  process.exit(errors.length ? 1 : 0);
}

if (cmd === "index") {
  fs.writeFileSync(path.join(root, "INDEX.md"), buildIndex(), "utf8");
  console.log("INDEX.md đã cập nhật");
} else if (cmd === "map") {
  let n = 0;
  for (const [readme, text] of mapLib.buildReadmes(mapContext())) {
    if (fs.readFileSync(readme, "utf8").replace(/\r\n/g, "\n") !== text) { fs.writeFileSync(readme, text, "utf8"); n++; }
  }
  console.log(`đã cập nhật sơ đồ ở ${n} README`);
} else if (cmd === "check") {
  check();
} else {
  console.log("Dùng: node tools/notes.js index|map|check [root]");
  process.exit(2);
}
