---
status: draft
---

# Data Migration

## Core idea
Quản lý mọi thay đổi của database theo thời gian bằng script có version, áp theo đúng thứ tự — thay vì sửa schema tay trực tiếp hay để Hibernate tự đoán (ddl-auto).

## Ví dụ từ project
- Vụ BigDecimal: thay vì hy vọng ddl-auto tự đổi kiểu cột, migration sẽ là 1 script ghi rõ ALTER TABLE đổi kiểu cột sang numeric.
- Vụ cột hóa thạch: 1 script DROP COLUMN dọn cột cũ còn sót sau khi đổi tên field.

## Open questions
- Flyway chạy cụ thể ra sao trong project study (dependency, thư mục db/migration, bảng flyway_schema_history)?
- DB đã có sẵn thì baseline migration làm thế nào (không chạy lại V1 từ đầu)?
