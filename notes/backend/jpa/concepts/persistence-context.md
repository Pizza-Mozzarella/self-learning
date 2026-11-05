---
title: Persistence Context
tags: [jpa, entity-manager]
status: draft
verified: no
---
**Một câu:** Persistence Context là bộ nhớ đệm các entity đang Managed, do EntityManager giữ.

## Ghi chú nhanh
- Entity nó giữ thì thành Managed; thay đổi được [dirty checking](../flow/flush-and-dirty-checking.md) phát hiện.
- Chết theo EntityManager, EntityManager chết theo transaction.

## Liên kết
- **Nền:** [Entity Manager](entity-manager.md)
- **Sâu hơn:** [Entity Lifecycle](../flow/entity-lifecycle.md) · [Containment](../architecture/entity-manager-containment.md)
