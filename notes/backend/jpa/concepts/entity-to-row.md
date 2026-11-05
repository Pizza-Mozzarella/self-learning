---
title: Entity to Row
tags: [jpa, hibernate, mapping]
status: draft
verified: no
---
**Một câu:** Bảng không bao giờ chứa object: Hibernate tháo object ra thành giá trị phẳng.

## Ví dụ
`Order` lưu thành một row ở `Orders` (`user_id` là khóa ngoại); mỗi item của nó là một row riêng ở `Order_Items` kèm `order_id`.

## Liên kết
- **Sâu hơn:** [Save Entity](../../flow/save-entity.md) · [Reference to Foreign Key](reference-to-foreign-key.md) · [Collection to Child Table](collection-to-child-table.md) · [Simple Field to Column](simple-field-to-column.md)
- **Bên cạnh:** [Entity Manager](entity-manager.md)
