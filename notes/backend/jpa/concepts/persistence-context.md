---
title: Persistence Context
tags: [jpa, entity-manager]
status: draft
verified: no
---
**Một câu:** Persistence Context là bộ nhớ đệm các entity đang Managed, do EntityManager giữ.

## Giải thích
Entity nào nó giữ thì thành Managed; thay đổi trên entity Managed được dirty checking phát hiện rồi flush xuống DB ([Flush and Dirty Checking](../flow/flush-and-dirty-checking.md)). Persistence Context chết theo EntityManager, EntityManager chết theo transaction ([Entity Manager Containment](../architecture/entity-manager-containment.md)).

## Liên kết
- **Nền:** [Entity Manager](entity-manager.md)
- **Sâu hơn:** [Entity Lifecycle](../flow/entity-lifecycle.md) · [Flush and Dirty Checking](../flow/flush-and-dirty-checking.md)
