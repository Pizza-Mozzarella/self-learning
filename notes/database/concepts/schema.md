---
title: Schema
tags: [database]
status: draft
verified: no
---
**Một câu:** Schema là cấu trúc của database (bảng nào, cột nào, kiểu gì, ràng buộc gì), là cái khung, còn data là các row đổ vào khung đó.

## Ví dụ
Bảng `product` có cột `id`, `name`, `sell_price numeric` là schema; các sản phẩm đã tạo là data. Migration đổi schema (thêm cột, đổi kiểu cột), không đổi data.

## Câu hỏi mở
Trong Postgres, schema còn có nghĩa hẹp là namespace (ví dụ `public`), phần này cần xác nhận thêm.

## Liên kết
- **Sâu hơn:** [Data Migration](data-migration.md)
