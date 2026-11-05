---
title: Entity to Row
tags: [jpa, hibernate, mapping]
status: draft
verified: no
---
**Một câu:** Bảng không bao giờ chứa object: Hibernate tháo object ra thành giá trị phẳng, tham chiếu thành id khóa ngoại, list thành bảng riêng, chỉ field đơn mới thành cột.

## Giải thích
Code làm việc với object (tham chiếu, list), database chỉ biết row và cột. Hibernate là lớp dịch ở giữa, nếu không có thì code phải tự viết SQL và tự ráp row thành object ở mọi chỗ.

## Ví dụ
Object `Order` trong RAM: `id=null, user=User{...}, items=[Item, Item], status="PENDING", totalPrice=250.0`.
Row trong bảng `Orders` sau khi lưu: `id=1 | user_id=uuid | status='PENDING' | total_price=250.0 | created_at=...`.
Các item không nằm trong row của Order: mỗi item là một row ở `Order_Items` kèm `order_id=1`.

## Liên kết
- **Sâu hơn:** [Save Entity](../../flow/save-entity.md) (đường đi qua các tầng)
- **Bên cạnh:** [Entity Manager](entity-manager.md)
