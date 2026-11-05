---
title: Cascade
tags: [jpa, relationship]
status: draft
verified: no
---
**Một câu:** Cascade là danh sách thao tác được phép lan từ entity mang annotation sang entity được tham chiếu.

## Giải thích
Thao tác nào có trong danh sách thì khi thực hiện trên entity mang cascade sẽ lan sang entity được tham chiếu; không có trong danh sách thì không lan. Chỉ đặt cascade ở quan hệ cha–con thật (bài kiểm tra: "Xóa cha thì con có nên biến mất theo không?"). Trong quan hệ cha–con, entity mang cascade là cha.

## Ví dụ
`Order.orderItemList` có `cascade = ALL`, nên persist, merge, remove trên `Order` lan sang `OrderItem`. `Order → User` không cascade, nên thao tác trên Order không lan sang User.

## Liên kết
- **Nền:** [Entity Manager](entity-manager.md)
- **Sâu hơn:** [Cascade Propagation](../flow/cascade-propagation.md)
- **Bên cạnh:** [Orphan Removal](orphan-removal.md)
