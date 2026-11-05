---
title: Data Migration
tags: [database, migration]
status: draft
verified: no
---
**Một câu:** Quản lý mọi thay đổi của database theo thời gian bằng script có version, áp theo đúng thứ tự, thay vì sửa schema tay hay để Hibernate tự đoán (`ddl-auto`).

## Ví dụ
Đổi kiểu cột sang `numeric` bằng một script `ALTER TABLE` ghi rõ, thay vì hy vọng `ddl-auto` tự đổi.

## Liên kết
- **Nền:** [Schema](schema.md)
