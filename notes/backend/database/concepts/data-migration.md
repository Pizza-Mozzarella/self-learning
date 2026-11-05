---
title: Data Migration
tags: [database, migration]
status: draft
verified: no
---
**Một câu:** Quản lý thay đổi của database bằng script có version, áp theo đúng thứ tự.

## Ví dụ
Đổi kiểu cột sang `numeric` bằng một script `ALTER TABLE` ghi rõ, thay vì hy vọng [`ddl-auto`](../glossary.md#ddl-auto) tự đổi.

## Liên kết
- **Nền:** [Schema](schema.md)
