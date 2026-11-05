---
title: Cascade
tags: [jpa, relationship]
status: draft
verified: no
---
**Một câu:** Cascade là danh sách thao tác được phép lan từ entity mang annotation sang entity được tham chiếu.

## Ví dụ
`Order.orderItemList` có `cascade = ALL` nên persist/merge/remove trên `Order` lan sang `OrderItem`; `Order → User` không cascade.

## Liên kết
- **Nền:** [Entity Manager](entity-manager.md)
- **Sâu hơn:** [Cascade Propagation](../flow/cascade-propagation.md) · [Chỉ cha–con](cascade-parent-child-only.md)
- **Bên cạnh:** [Orphan Removal](orphan-removal.md)
