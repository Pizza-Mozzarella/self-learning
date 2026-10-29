# Study Notes — Second Brain

Kho ghi chú tự học: mỗi kiến thức học được → một note ngắn, kiểm chứng bằng code chạy thật, không phải lý thuyết suông.

## Cấu trúc

- **[concepts/](concepts/)** — một cây duy nhất, 13 chủ đề. Mỗi note là một file, trạng thái nằm ở frontmatter: `status: draft` (chưa kiểm chứng hoặc chưa chốt) hoặc `status: published` (đã kiểm chứng bằng code chạy và đã chốt).
- **[temporary/](temporary/)** — nơi tập kết note mới trước khi tổ chức: note mới push thẳng vào đây để user coi trước, rồi dời vào `concepts/` theo lệnh user. Không phải mirror — note chỉ nằm ở một chỗ tại một thời điểm, không nhân đôi.
- **Phân tầng:** note tổng quan đứng ở gốc chủ đề, note đào sâu từng tầng gom dưới `layers/` của chủ đề đó — không xếp tổng quan và đào sâu ngang nhau.
- **[_index/](_index/topic-map.md)** — mục lục theo tên (topic-map) và thay đổi gần đây (recent-changes).
- **[OUTLINE.md](OUTLINE.md)** — thứ tự đọc theo tầng (không phải thứ tự file).
- **[log/open-questions.md](log/open-questions.md)** — các câu hỏi và món đang park, chờ điều tra hoặc chờ chốt.
- **guides/** — chỉ tạo khi có nội dung đầu tiên: `howto/` (quy trình làm việc) và `debugging/` (điều tra lỗi theo triệu chứng).
- **.maintenance/** — ghi chép nội bộ về các đợt bảo trì repo, không phải nội dung học.

Tiêu chí `published`: biên dịch sạch (không lỗi, không cảnh báo lạ) + test xanh (Bruno hoặc JUnit tùy loại kiến thức) + đếm query/log thực tế nếu note liên quan hiệu năng (vd N+1, fetch). Note chưa đủ thì ở `draft`, đọc thì tự kiểm chứng lại.

## Cách thêm một note

1. Viết note hub đúng tầng của nó với frontmatter `status: draft`, kèm folder `NN-ten-note/` chứa 3 file structure.md/flow.md/classes.md: note tổng quan ở `concepts/<chủ đề>/NN-ten-note.md`, note đào sâu từng tầng ở `concepts/<chủ đề>/layers/NN-ten-note.md`, note của nhánh mới ở folder nhánh riêng.
2. Kiểm chứng bằng code chạy (project study hoặc ví dụ tối thiểu).
3. Khi đã kiểm chứng và đã chốt nội dung thì sửa frontmatter thành `status: published` (không chuyển thư mục), cập nhật `OUTLINE.md` và README chủ đề.
4. Commit + push (mỗi note một commit riêng để lịch sử rõ ràng).

## Mẫu note (một khái niệm = một file ngắn)

0. **Frontmatter** — title, summary một dòng, domain, status, created, updated. Chỉ note hub mới có frontmatter, file phần không cần frontmatter riêng.
1. **Purpose** — concept giải quyết vấn đề gì?
2. **Core idea** — ý tưởng cốt lõi, một dòng, nguyên văn, dùng để nhắc lại sau này. Ghi dạng tổng quát nhất mà luật còn đúng; trường hợp cụ thể chỉ nằm dưới làm ví dụ (vd trong mục Ví dụ), không ghi chỉ đích thị riêng một thứ.
3. **Mental model** — giải thích ngắn giúp hình dung concept, không vẽ lại sơ đồ tổng thể.
4. **Structure map** — liên kết nổi bật đến `structure.md` + bản đồ thu gọn đủ hiểu độc lập (thành phần + quan hệ chính); sơ đồ và chi tiết đầy đủ nằm ở file phần.
5. **Deep dives** — mỗi phần kèm đoạn thu gọn đủ hiểu (luồng chính, trách nhiệm chính) + link tới chi tiết đầy đủ ở `flow.md`, `classes.md` và tài liệu chuyên sâu khác nếu có.
6. **Ví dụ từ project** — link tới commit/code thật trong repo study.
7. **Key takeaways / open questions** — điểm cần nhớ và câu hỏi chưa giải quyết (nếu có).
Không bắt buộc đủ mọi mục — bỏ mục không phù hợp thay vì tạo nội dung hình thức.

Ba file phần: **structure.md** (Cấu trúc — gồm những gì, quan hệ gì, sơ đồ cấu trúc và bản vẽ tay của user đặt ở đây, kèm Navigation guide: đọc phần nào trước, vì sao, rồi đi flow hay classes, khi nào quay lại sơ đồ tổng thể), **flow.md** (Flow — chạy ra sao theo thời gian, ai gọi ai, liên kết về thành phần tương ứng trong structure.md), **classes.md** (Thành phần và trách nhiệm — vai trò và quan hệ của từng thành phần, đơn vị tùy bản chất concept: class/interface/module/process/service/component/entity, liệt kê, không vẽ lại Class Diagram đã có ở structure.md). Hub giữ Purpose/Core idea/Mental model/Structure map/Deep dives/Ví dụ/Takeaways + link tới 3 file. Ba phần phải khớp nhau, không sao chép cùng một giải thích sang nhiều file. Phần nào không phù hợp với concept thì không tạo file mà ghi nhận 1 dòng trong hub. File phần giữ chi tiết đầy đủ cho ai muốn đào sâu; hub phải đọc độc lập được mà không cần mở file phần. Đoạn thu gọn trong hub viết mới ngắn gọn, không sao chép nguyên khối từ file phần.

Sơ đồ trong note viết bằng code Mermaid (GitHub tự render); bản vẽ tay của user giữ file PNG.

## Quy tắc đánh số (để khỏi refactor sau này)

- Số thứ tự file = **thứ tự note được viết thực tế**, không phải thứ tự bắt buộc phải đọc.
- Muốn đổi thứ tự đọc thì sửa `OUTLINE.md`, **không đổi tên file cũ** — đổi tên là vỡ mọi link đã dẫn tới nó.
- Chủ đề mới xuất hiện thì thêm một thư mục dưới `concepts/` kèm README mô tả phạm vi.

## Điều hướng

👉 **[Xem toàn bộ danh mục tại OUTLINE.md](OUTLINE.md)**

## Disclaimer

Đây là ghi chú cá nhân, mang góc nhìn chủ quan của người học, không phải giáo trình chuẩn. Đọc thì tự đối chiếu và kiểm chứng độc lập với tài liệu chính thức của công nghệ liên quan.
