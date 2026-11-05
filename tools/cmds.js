// Các lệnh cơ học để tiết kiệm công (và token): new, term, ok, ship. In ra đúng một dòng kết quả.
const fs = require("fs");
const path = require("path");
const cp = require("child_process");

const toolPath = path.join(__dirname, "notes.js");
const fileSlug = (t) => t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const headSlug = (h) => h.trim().toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, "").replace(/\s+/g, "-");
const posix = (p) => p.split(path.sep).join("/");
const DRAFT = " *(draft)*";

function parseArgs(argv) {
  const pos = [], flags = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("--")) flags[argv[i].slice(2)] = argv[++i] || "";
    else pos.push(argv[i]);
  }
  return { pos, flags };
}

function fail(msg) { console.log("LỖI " + msg); process.exit(1); }

function runTool(root, ...args) {
  return cp.spawnSync(process.execPath, [toolPath, ...args, root], { encoding: "utf8" });
}

function titleOf(file) {
  const t = fs.readFileSync(file, "utf8");
  return (t.match(/^title:\s*(.*)$/m) || [])[1] || path.basename(file, ".md");
}

// new <thư-mục-trong-notes> "<Tiêu đề>" "<Một câu>" [--tags a,b] [--base p1,p2] [--deeper ...] [--side ...]
function newNote(root, argv) {
  const { pos, flags } = parseArgs(argv);
  const [dir, title, one] = pos;
  if (!dir || !title || !one) fail('dùng: new <thư-mục> "<Tiêu đề>" "<Một câu>" [--tags a,b] [--base p] [--deeper p] [--side p]');
  const abs = path.resolve(root, "notes", dir);
  fs.mkdirSync(abs, { recursive: true });
  const file = path.join(abs, fileSlug(title) + ".md");
  if (fs.existsSync(file)) fail("đã có " + posix(path.relative(root, file)));
  const links = [];
  for (const [flag, label] of [["base", "Nền"], ["deeper", "Sâu hơn"], ["side", "Bên cạnh"]]) {
    const items = (flags[flag] || "").split(",").map((s) => s.trim()).filter(Boolean).map((p) => {
      const target = path.resolve(root, "notes", p.endsWith(".md") ? p : p + ".md");
      if (!fs.existsSync(target)) fail("không thấy note đích: " + p);
      return `[${titleOf(target)}](${posix(path.relative(abs, target))})`;
    });
    if (items.length) links.push(`- **${label}:** ${items.join(" · ")}`);
  }
  const body = `---\ntitle: ${title}\ntags: [${flags.tags || ""}]\nstatus: draft\nverified: no\n---\n**Một câu:** ${one}\n${links.length ? `\n## Liên kết\n${links.join("\n")}\n` : ""}`;
  fs.writeFileSync(file, body, "utf8");
  // thêm vào README hub của thư mục (tạo nếu chưa có)
  const readme = path.join(abs, "README.md");
  let lines = fs.existsSync(readme) ? fs.readFileSync(readme, "utf8").replace(/\r\n/g, "\n").split("\n") : [`# ${path.basename(path.dirname(abs))}: ${path.basename(abs)}`, ""];
  let last = -1;
  lines.forEach((l, i) => { if (/^\d+\. \[/.test(l)) last = i; });
  const n = last >= 0 ? Number(lines[last].match(/^(\d+)\./)[1]) + 1 : 1;
  const entry = `${n}. [${title}](${path.basename(file)})`;
  if (last >= 0) lines.splice(last + 1, 0, entry);
  else lines.push(entry, "");
  fs.writeFileSync(readme, lines.join("\n").replace(/\n*$/, "\n"), "utf8");
  runTool(root, "map");
  runTool(root, "index");
  console.log("+ " + posix(path.relative(root, file)));
}

// term <chủ-đề> "<Tên>" "<định nghĩa>"   (chủ-đề là thư mục chứa glossary.md, tính từ notes/)
function addTerm(root, argv) {
  const [topic, name, def] = argv;
  if (!topic || !name || !def) fail('dùng: term <chủ-đề> "<Tên>" "<định nghĩa>"');
  const g = path.join(root, "notes", topic, "glossary.md");
  if (!fs.existsSync(g)) {
    fs.mkdirSync(path.dirname(g), { recursive: true });
    fs.writeFileSync(g, `# ${path.basename(topic)}: thuật ngữ\n\nMỗi mục là một thuật ngữ với một dòng giải thích.\n`, "utf8");
  }
  let t = fs.readFileSync(g, "utf8").replace(/\r\n/g, "\n");
  if ([...t.matchAll(/^### (.+)$/gm)].some((m) => headSlug(m[1]) === headSlug(name))) fail("đã có thuật ngữ " + name);
  t = t.replace(/\n*$/, "\n") + `\n### ${name}\n${def}${DRAFT}\n`;
  fs.writeFileSync(g, t, "utf8");
  runTool(root, "index");
  console.log(`+ ${posix(path.relative(root, g))}#${headSlug(name)}`);
}

// ok <đường-dẫn-từ-notes>[#neo]: bỏ dấu draft của một thuật ngữ, hoặc đổi status note thành ok
function okTarget(root, argv) {
  const [target] = argv;
  if (!target) fail("dùng: ok <đường-dẫn-từ-notes>[#neo]");
  const [p, frag] = target.split("#");
  const file = path.resolve(root, "notes", p.endsWith(".md") ? p : p + ".md");
  if (!fs.existsSync(file)) fail("không thấy " + p);
  let t = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
  if (frag) {
    const parts = t.split(/^(?=### )/m);
    const i = parts.findIndex((s) => s.startsWith("### ") && headSlug(s.split("\n")[0].slice(4)) === frag);
    if (i < 0) fail("không có thuật ngữ #" + frag);
    if (!parts[i].includes(DRAFT)) fail("#" + frag + " đã chốt rồi");
    parts[i] = parts[i].replace(DRAFT, "");
    t = parts.join("");
  } else {
    if (!/^status:\s*draft\s*$/m.test(t)) fail("note không ở trạng thái draft");
    t = t.replace(/^status:\s*draft\s*$/m, "status: ok");
  }
  fs.writeFileSync(file, t, "utf8");
  if (!frag) runTool(root, "map");
  runTool(root, "index");
  console.log("ok " + target);
}

// ship "<thông điệp commit>": map, index, check, commit và push lên nhánh hiện tại
function ship(root, argv) {
  const message = argv[0];
  if (!message) fail('dùng: ship "<thông điệp commit>"');
  const git = (...a) => cp.spawnSync("git", a, { cwd: root, encoding: "utf8" });
  runTool(root, "map");
  runTool(root, "index");
  const chk = runTool(root, "check");
  if (chk.status) { console.log(chk.stdout.trim()); process.exit(1); }
  const paths = ["notes", "tools", "INDEX.md", "README.md", "HUONG-DAN.md", "inbox", ".github", ".gitignore"].filter((x) => fs.existsSync(path.join(root, x)));
  git("add", ...paths);
  if (git("diff", "--cached", "--quiet").status === 0) { console.log("không có gì để commit"); return; }
  const c = git("commit", "-q", "-m", `${message}\n\nCo-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`);
  if (c.status) fail("commit thất bại: " + (c.stderr || "").trim().split("\n")[0]);
  let push = git("push");
  if (push.status) { git("pull", "--rebase"); push = git("push"); }
  const branch = git("branch", "--show-current").stdout.trim();
  const sha = git("rev-parse", "--short", "HEAD").stdout.trim();
  console.log(`${branch} ${sha} ${push.status ? "đã commit, push THẤT BẠI" : "đã push"}`);
}

module.exports = { new: newNote, term: addTerm, ok: okTarget, ship };
