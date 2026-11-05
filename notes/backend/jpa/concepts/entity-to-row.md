---
title: Entity to Row
tags: [jpa, hibernate, mapping]
status: draft
verified: no
---
**Một câu:** Bảng không bao giờ chứa object: Hibernate tháo object ra thành giá trị phẳng, tham chiếu thành id khóa ngoại, list thành bảng riêng, chỉ field đơn mới thành cột.

## Ví dụ
`Order` lưu thành một row ở `Orders` (`user_id` là khóa ngoại); mỗi item của nó là một row riêng ở `Order_Items` kèm `order_id`.

## Liên kết
- **Sâu hơn:** [Save Entity](../../flow/save-entity.md)
- **Bên cạnh:** [Entity Manager](entity-manager.md)
