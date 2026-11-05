// Sinh sơ đồ Mermaid từ dữ kiện có thật, không tự bịa quan hệ.
//  - Sơ đồ quan hệ của một thư mục: cạnh lấy từ mục "Liên kết" của các note (Nền, Sâu hơn, Bên cạnh).
//  - Sơ đồ cấu trúc: cây thư mục thật, kèm số note.
// Được gọi từ notes.js: `map` ghi vào README, `check` kiểm tra README còn khớp.
const fs = require("fs");
const path = require("path");

const REL_LABELS = { "Nền": "base", "Sâu hơn": "deeper", "Bên cạnh": "side" };

function readLinks(body, fromFile) {
  const edges = [];
  const re = /^- [*][*](Nền|Sâu hơn|Bên cạnh):[*][*](.*)$/gm;
  let m;
  while ((m = re.exec(body))) {
    for (const l of m[2].matchAll(/\]\(([^)\s]+)\)/g)) {
      const href = l[1].split("#")[0];
      if (!href || /^(https?:|mailto:)/.test(href) || !href.endsWith(".md")) continue;
      const target = path.resolve(path.dirname(fromFile), href);
      if (path.basename(target) === "README.md") continue;
      edges.push({ type: REL_LABELS[m[1]], target });
    }
  }
  return edges;
}

// info: Map(absPath -> {title, status, body})
function collectEdges(info) {
  const seen = new Set();
  const edges = []; // {from, to, kind: "dir"|"side"}
  const add = (from, to, kind) => {
    if (from === to) return;
    const key = kind === "side" ? `s|${[from, to].sort().join("|")}` : `d|${from}|${to}`;
    if (seen.has(key)) return;
    seen.add(key);
    edges.push({ from, to, kind });
  };
  for (const [file, n] of info) {
    for (const e of readLinks(n.body, file)) {
      if (!info.has(e.target)) continue;
      if (e.type === "base") add(e.target, file, "dir"); // nền đứng trước, mũi tên đi từ nền tới note
      else if (e.type === "deeper") add(file, e.target, "dir"); // sâu hơn đi từ note xuống phần con
      else add(file, e.target, "side");
    }
  }
  return edges;
}

// Hai note không thể cùng là nền/chi tiết của nhau: vòng như vậy là mâu thuẫn.
function findCycles(info, edges) {
  const adj = new Map();
  for (const e of edges) if (e.kind === "dir") (adj.get(e.from) || adj.set(e.from, []).get(e.from)).push(e.to);
  const state = new Map(), cycles = [];
  const dfs = (u, stack) => {
    state.set(u, 1);
    for (const v of adj.get(u) || []) {
      if (state.get(v) === 1) cycles.push([...stack.slice(stack.indexOf(v)), u, v]);
      else if (!state.get(v)) dfs(v, [...stack, u]);
    }
    state.set(u, 2);
  };
  for (const u of adj.keys()) if (!state.get(u)) dfs(u, []);
  return cycles;
}

const CLASSES = [
  "    classDef stub fill:#eeeeee,stroke:#999999,stroke-dasharray:4 3,color:#555555",
  "    classDef draft fill:#fff4cc,stroke:#c9a227,color:#333333",
  "    classDef ok fill:#d8f0dc,stroke:#3a9d5d,color:#222222",
  "    classDef ext fill:#ffffff,stroke:#999999,color:#555555",
];

// Sơ đồ quan hệ của các note nằm trực tiếp trong thư mục dir.
function relationMap(dir, info, edges, notesDir) {
  const internal = [...info.keys()].filter((f) => path.dirname(f) === dir).sort();
  if (!internal.length) return "";
  const inSet = new Set(internal);
  const rel = edges.filter((e) => inSet.has(e.from) || inSet.has(e.to));
  const ext = new Set();
  for (const e of rel) for (const f of [e.from, e.to]) if (!inSet.has(f)) ext.add(f);
  if (!rel.length) return "";
  const ids = new Map();
  [...internal, ...[...ext].sort()].forEach((f, i) => ids.set(f, `n${i}`));
  const out = ["```mermaid", "flowchart TD"];
  for (const f of internal) {
    const n = info.get(f);
    out.push(`    ${ids.get(f)}["${n.title}"]:::${n.status}`);
  }
  for (const f of [...ext].sort()) {
    const n = info.get(f);
    const where = path.relative(notesDir, path.dirname(f)).split(path.sep).slice(-2).join("/");
    out.push(`    ${ids.get(f)}["${n.title}<br/>(${where})"]:::ext`);
  }
  for (const e of rel) out.push(`    ${ids.get(e.from)} ${e.kind === "side" ? "-.-" : "-->"} ${ids.get(e.to)}`);
  out.push(...CLASSES, "```");
  return out.join("\n");
}

// Cây thư mục thật dưới dir, kèm số note trực tiếp của mỗi thư mục.
function treeMap(dir, info) {
  const counts = new Map();
  for (const f of info.keys()) {
    let d = path.dirname(f);
    counts.set(d, (counts.get(d) || 0) + 1);
  }
  const subdirs = (d) => fs.readdirSync(d, { withFileTypes: true }).filter((e) => e.isDirectory() && e.name !== "assets" && !e.name.startsWith(".")).map((e) => path.join(d, e.name)).sort();
  const lines = [];
  let i = 0;
  const walk = (d, parentId) => {
    const id = `d${i++}`;
    const own = counts.get(d) || 0;
    lines.push(`    ${id}["${path.basename(d)}/${own ? `<br/>${own} note` : ""}"]`);
    if (parentId) lines.push(`    ${parentId} --> ${id}`);
    for (const s of subdirs(d)) walk(s, id);
  };
  walk(dir, null);
  return ["```mermaid", "flowchart TD", ...lines, "```"].join("\n");
}

const MAP_START = "<!-- map:start -->", MAP_END = "<!-- map:end -->";
const TREE_START = "<!-- tree:start -->", TREE_END = "<!-- tree:end -->";

function withBlock(text, start, end, content, insertIfMissing) {
  const note = start === MAP_START ? "_Sơ đồ tự sinh từ link trong các note, đừng sửa tay: `node tools/notes.js map`._" : "_Cây thư mục tự sinh, đừng sửa tay: `node tools/notes.js map`._";
  const block = `${start}\n${content ? `${note}\n\n${content}\n` : ""}${end}`;
  const re = new RegExp(`${start}[\\s\\S]*?${end}`);
  if (re.test(text)) return text.replace(re, () => block);
  if (!insertIfMissing) return text;
  const lines = text.split("\n");
  const h1 = lines.findIndex((l) => l.startsWith("# "));
  lines.splice(h1 + 1, 0, "", block);
  return lines.join("\n");
}

// Trả về Map(readmePath -> nội dung mới) cho mọi README cần có sơ đồ.
function buildReadmes({ notesDir, info, readmes, edges }) {
  const out = new Map();
  for (const readme of readmes) {
    const dir = path.dirname(readme);
    let text = fs.readFileSync(readme, "utf8").replace(/\r\n/g, "\n");
    if (text.includes(TREE_START)) {
      text = withBlock(text, TREE_START, TREE_END, treeMap(dir, info), false);
    } else {
      text = withBlock(text, MAP_START, MAP_END, relationMap(dir, info, edges, notesDir), true);
    }
    out.set(readme, text);
  }
  return out;
}

module.exports = { collectEdges, findCycles, buildReadmes };
