# Release — Note đã kiểm chứng

Vùng này chỉ chứa note đã qua kiểm chứng bằng code chạy thật, gồm ít nhất:

- Biên dịch sạch (không lỗi, không cảnh báo lạ).
- Test xanh (Bruno hoặc JUnit tùy loại kiến thức).
- Đếm query/log thực tế nếu note liên quan hiệu năng (vd N+1, fetch).

Note chưa đủ 3 điều trên thì ở lại [vùng Temporary](../temporary/README.md), không lên đây.

Mỗi chủ đề là một thư mục, bên trong có README liệt kê các ô trống (note dự kiến) và các note đã viết (đánh số theo thứ tự được viết thực tế).
