# System Design

Phạm vi: thiết kế hệ thống cơ bản — slot chờ, học sau khi nền tảng đã chắc.

## Ô trống (note dự kiến — viết theo thứ tự học thực tế, không bắt buộc theo list)

- Thiết kế hệ thống cơ bản: từ yêu cầu tới kiến trúc
- Mở rộng theo chiều ngang và chiều dọc
- Cache, queue và database: chọn cái nào khi nào

## Quy tắc

- Note mới: folder `NN-ten-note/`, số tiếp theo, đặt đúng tầng (folder concept tổng quan gốc ở gốc chủ đề, folder concept con ở `layers/` trong folder concept cha); không đổi tên file cũ.
- Trạng thái note nằm ở frontmatter: `status: draft` (chưa kiểm chứng hoặc chưa chốt) hoặc `status: published` (đã kiểm chứng bằng code chạy và đã chốt). Đổi trạng thái thì sửa frontmatter, không chuyển thư mục.
