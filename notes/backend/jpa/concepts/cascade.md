---
title: Cascade
tags: [jpa, relationship]
status: draft
verified: no
---
**Một câu:** Cascade là danh sách thao tác được phép lan từ entity mang annotation sang entity được tham chiếu.

## Ghi chú nhanh
- Chỉ đặt ở quan hệ cha–con thật ("xóa cha thì con có nên biến mất theo không?").

## Ví dụ
`Order.orderItemList` có `cascade = ALL` nên persist/merge/remove trên `Order` lan sang `OrderItem`; `Order → User` không cascade.

## Liên kết
- **Nền:** [Entity Manager](entity-manager.md)
- **Sâu hơn:** [Cascade Propagation](../flow/cascade-propagation.md)
- **Bên cạnh:** [Orphan Removal](orphan-removal.md)
