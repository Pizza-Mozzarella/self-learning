# Study Notes — Second Brain

Kho ghi chú tự học: mỗi kiến thức học được → một note ngắn, kiểm chứng bằng code chạy thật, không phải lý thuyết suông.

## Cấu trúc

- **[concepts/](concepts/)** — một cây duy nhất, 13 chủ đề. Mỗi note là một file, trạng thái nằm ở frontmatter: `status: draft` (chưa kiểm chứng hoặc chưa chốt) hoặc `status: published` (đã kiểm chứng bằng code chạy và đã chốt).
- **[_index/](_index/topic-map.md)** — mục lục theo tên (topic-map) và thay đổi gần đây (recent-changes).
- **[OUTLINE.md](OUTLINE.md)** — thứ tự đọc theo tầng (không phải thứ tự file).
- **[log/open-questions.md](log/open-questions.md)** — các câu hỏi và món đang park, chờ điều tra hoặc chờ chốt.
- **guides/** — chỉ tạo khi có nội dung đầu tiên: `howto/` (quy trình làm việc) và `debugging/` (điều tra lỗi theo triệu chứng).
- **.maintenance/** — ghi chép nội bộ về các đợt bảo trì repo, không phải nội dung học.

Tiêu chí `published`: biên dịch sạch (không lỗi, không cảnh báo lạ) + test xanh (Bruno hoặc JUnit tùy loại kiến thức) + đếm query/log thực tế nếu note liên quan hiệu năng (vd N+1, fetch). Note chưa đủ thì ở `draft`, đọc thì tự kiểm chứng lại.

## Cách thêm một note

1. Viết file vào `concepts/<chủ đề>/NN-ten-note.md` với frontmatter `status: draft`.
2. Kiểm chứng bằng code chạy (project study hoặc ví dụ tối thiểu).
3. Khi đã kiểm chứng và đã chốt nội dung thì sửa frontmatter thành `status: published` (không chuyển thư mục), cập nhật `OUTLINE.md` và README chủ đề.
4. Commit + push (mỗi note một commit riêng để lịch sử rõ ràng).

## Mẫu note (một khái niệm = một file ngắn)

0. **Frontmatter** — title, summary một dòng, domain, status, created, updated.
1. **Tóm gọn của user** (nếu có) — câu chốt nguyên văn của user + bản vẽ tay của user, đặt ngay sau tiêu đề, tách riêng khỏi phần giải thích của agent.
2. **Câu chốt** — một dòng, nguyên văn, dùng để nhắc lại sau này.
3. **Vì sao tồn tại** — vấn đề nó sinh ra để giải quyết.
4. **Cơ chế** — ai gọi ai, chạy lúc nào, đọc dữ liệu gì để quyết định. Tách riêng **Cấu trúc** (gồm những gì, quan hệ gì) và **Flow** (chạy ra sao theo thời gian, ai gọi ai) — hai lát cắt phải khớp nhau.
5. **Ví dụ từ project** — link tới commit/code thật trong repo study.
6. **Bẫy thường gặp** — lỗi đã mắc hoặc dễ mắc.

Sơ đồ trong note viết bằng code Mermaid (GitHub tự render); bản vẽ tay của user giữ file PNG.

## Quy tắc đánh số (để khỏi refactor sau này)

- Số thứ tự file = **thứ tự note được viết thực tế**, không phải thứ tự bắt buộc phải đọc.
- Muốn đổi thứ tự đọc thì sửa `OUTLINE.md`, **không đổi tên file cũ** — đổi tên là vỡ mọi link đã dẫn tới nó.
- Chủ đề mới xuất hiện thì thêm một thư mục dưới `concepts/` kèm README mô tả phạm vi.

## Điều hướng

👉 **[Xem toàn bộ danh mục tại OUTLINE.md](OUTLINE.md)**

## Disclaimer

Đây là ghi chú cá nhân, mang góc nhìn chủ quan của người học, không phải giáo trình chuẩn. Đọc thì tự đối chiếu và kiểm chứng độc lập với tài liệu chính thức của công nghệ liên quan.
