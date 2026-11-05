---
title: Data Migration
tags: [database, migration]
status: draft
verified: no
---
**Một câu:** Quản lý mọi thay đổi của database theo thời gian bằng script có version, áp theo đúng thứ tự, thay vì sửa schema tay hay để Hibernate tự đoán (`ddl-auto`).

## Ví dụ
- Đổi kiểu cột sang BigDecimal: thay vì hy vọng `ddl-auto` tự đổi, một script ghi rõ `ALTER TABLE` đổi kiểu cột sang `numeric`.
- Dọn cột cũ còn sót sau khi đổi tên field: một script `DROP COLUMN`.

## Câu hỏi mở
- Flyway chạy cụ thể ra sao trong project study (dependency, thư mục `db/migration`, bảng `flyway_schema_history`)?
- DB đã có sẵn thì baseline migration làm thế nào (không chạy lại V1 từ đầu)?

## Liên kết
- **Nền:** [Schema](schema.md)
