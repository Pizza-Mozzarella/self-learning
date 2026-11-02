---
status: draft
---

# Schema (Database Schema)

## Core idea
Schema là cấu trúc của database: gồm những bảng nào, mỗi bảng có cột nào, kiểu gì, ràng buộc gì (khóa chính, khóa ngoại, NOT NULL, unique...). Schema là cái khung, data là các row đổ vào trong khung đó.

## Ví dụ từ project
- Bảng product có cột id, name, sell_price numeric — đó là schema; các sản phẩm đã tạo — đó là data.
- Migration đổi schema (thêm cột, đổi kiểu cột), không đổi data.

## Open questions
- Trong Postgres, schema còn có nghĩa hẹp là namespace (ví dụ public) — phần này cần xác nhận thêm.
