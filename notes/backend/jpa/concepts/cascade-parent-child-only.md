---
title: Cascade Parent-Child Only
tags: [jpa, relationship]
status: draft
verified: no
---
**Một câu:** Chỉ đặt cascade ở quan hệ cha–con thật (bài kiểm tra: xóa cha thì con có nên biến mất theo không).

## Ví dụ
`Order.orderItemList` là cha–con nên có `cascade = ALL`; `Order → User` không phải cha–con nên không cascade.

## Liên kết
- **Nền:** [Cascade](cascade.md)
