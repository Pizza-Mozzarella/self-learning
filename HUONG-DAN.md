# Hướng dẫn sử dụng

Kho ghi chú tự học Java/Spring/backend. Mỗi note là **một ý nguyên tử**, nói gọn được trong một câu theo ý hiểu của người học. Giá trị chính của repo nằm ở **cấu trúc** (cây thư mục, quan hệ giữa các note) và các note `architecture` / `flow`.

## Đọc ở đâu

| Muốn | Mở |
|---|---|
| Xem cả cây, mỗi note kèm câu chốt | [INDEX.md](INDEX.md) |
| Xem cây thư mục và số note | [notes/README.md](notes/README.md) |
| Xem quan hệ giữa các note của một thư mục | `README.md` trong thư mục đó (có sơ đồ) |
| Tra một thuật ngữ | `glossary.md` trong thư mục chủ đề (ví dụ [JPA](notes/backend/jpa/glossary.md)) |
| Xem câu hỏi đang treo | [inbox/questions.md](inbox/questions.md) |

Mẹo: mở thư mục repo bằng Obsidian (Open folder as vault) để duyệt cây gập mở và xem Graph view.

## Cấu trúc thư mục

```
notes/<lĩnh vực>/…/<chủ đề>/<loại>/<note>.md
vd: notes/backend/spring/data/jpa/concepts/repository.md
```

Có ba **loại**, mỗi loại trả lời một câu hỏi:

- `concepts/`: X **là gì** (note nguyên tử, một ý).
- `architecture/`: X **gồm những phần nào, nối với nhau ra sao** (cấu trúc tĩnh).
- `flow/`: X **chạy thế nào theo thời gian** (luồng động).

Hai loại sau là **note tổng hợp** (ghép nhiều ý). Chúng nằm ở **thư mục cha chung gần nhất của mọi thứ chúng nhắc tới**: chỉ trong Spring Data JPA thì ở `spring/data/jpa/`, xuyên Spring và JPA và database thì ở `backend/`. Java core là ngôn ngữ nền, đứng riêng ngoài `backend/`.

Thư mục chỉ được tạo khi có note đầu tiên. Cha con trong thư mục nghĩa là "thuộc họ nào", không phải "dựng trên cái nào".

## Một note

```markdown
---
title: Thuật ngữ tiếng Anh chuẩn
tags: [spring, bean]
status: draft
verified: no
---
**Một câu:** câu chốt bằng lời của mình, tổng quát, một ý.

## Ví dụ              (tuỳ chọn, ngắn)
## Liên kết
- **Nền:** note cần biết trước
- **Sâu hơn:** phần con, chi tiết của note này
- **Bên cạnh:** note liên quan ngang cấp
```

- Tên file, tiêu đề, tag dùng thuật ngữ tiếng Anh chuẩn (slug chữ thường, nối gạch ngang). Giải thích viết tiếng Việt.
- **"Một câu"** là câu chốt của người học. Nếu cần chữ "và" thì nên tách thành hai note.
- `status`: `stub` (mới có tên và một câu hỏi, chưa học), `draft` (đã viết, chưa chốt), `ok` (đã chốt).
- `verified`: `no`, hoặc `yes <link tới code/commit>` khi đã kiểm chứng bằng code chạy.
- Một note stub có dòng `**Câu hỏi:**` thay cho "Một câu".
- Mỗi khẳng định riêng là một note riêng. Không gộp nhiều ý thành gạch đầu dòng trong một note.

## Thuật ngữ (glossary)

Thuật ngữ nguyên tử (Managed, Dirty checking...) không phải note mà là một mục trong `glossary.md` của chủ đề:

```markdown
### Dirty checking
Lúc flush, so từng entity Managed với bản chụp lúc nạp; entity nào khác thì sinh UPDATE.
```

Từ "Một câu" của note, link tới mục đó bằng `[dirty checking](../glossary.md#dirty-checking)`. Thuật ngữ không xuất hiện trong sơ đồ. `check` kiểm tra link neo `#...` có trỏ đúng một mục, và không có mục trùng hoặc rỗng.

## Đọc sơ đồ

Sơ đồ trong README mỗi thư mục chỉ vẽ **cấu trúc**, tự sinh từ các link "Liên kết" của note, không vẽ tay. Link **Nền** (thứ tự học) không được vẽ, nó chỉ nằm trong note.

| Hình | Nghĩa |
|---|---|
| Mũi tên A → B | B là phần con hoặc chi tiết của A (từ link "Sâu hơn" của A) |
| Nét đứt A - - B | liên quan ngang cấp, không có thứ tự (từ link "Bên cạnh") |
| Ô vàng | draft |
| Ô xám nét đứt | stub |
| Ô xanh | ok |
| Ô viền nhạt | note ở thư mục khác |

Note thiếu link thì quan hệ đó không hiện. Nền hoặc Sâu hơn tạo vòng mâu thuẫn thì `check` báo lỗi.

## Thêm một note

1. Tạo `notes/.../<loại>/<slug>.md` theo mẫu ở [tools/template.md](tools/template.md).
2. Thêm note vào `README.md` của thư mục đó (danh sách theo thứ tự đọc).
3. Chạy ba lệnh (cần Node):

```bash
node tools/notes.js map      # vẽ lại sơ đồ trong README
node tools/notes.js index    # sinh lại INDEX.md
node tools/notes.js check    # kiểm tra, 0 lỗi mới được commit
```

`check` kiểm tra: tên file, frontmatter, "Một câu" (hoặc "Câu hỏi" với stub), link không hỏng, README thư mục đã liệt kê đủ note, `INDEX.md` và sơ đồ không bị cũ, không có vòng Nền/Sâu hơn. Workflow GitHub cũng chạy `check` mỗi lần push.

## Lệnh nhanh

```bash
node tools/notes.js new backend/jpa/concepts "Merge Semantics" "Câu chốt." --tags jpa --base backend/jpa/concepts/entity-manager.md
node tools/notes.js term backend/jpa "Snapshot" "Một dòng giải thích."
node tools/notes.js ok backend/jpa/glossary#managed
node tools/notes.js ship "Mô tả thay đổi"
```

- `new`: tạo note từ template, thêm vào README của thư mục, chạy `map` và `index`. `--base`, `--deeper`, `--side` nhận đường dẫn note tính từ `notes/` (có thể bỏ `.md`).
- `term`: thêm một thuật ngữ vào `glossary.md` của chủ đề, mặc định ở trạng thái `*(draft)*`.
- `ok`: chốt một thuật ngữ (bỏ `*(draft)*`) hoặc một note (`status: ok`).
- `ship`: chạy `map`, `index`, `check`; nếu 0 lỗi thì commit và push lên nhánh đang đứng.

## Làm việc với git

- Một note là một commit.
- Làm trên nhánh riêng, đẩy lên GitHub rồi mở Pull Request để xem lại trước khi gộp vào `main`.
- Sau khi gộp, `git pull` ở `main` để máy khớp với GitHub.
- Không sửa tay `INDEX.md` và khối sơ đồ giữa `<!-- map:start -->` và `<!-- map:end -->`, vì chúng bị ghi đè.
