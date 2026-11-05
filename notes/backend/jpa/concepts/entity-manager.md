---
title: Entity Manager
tags: [jpa, entity-manager]
status: draft
verified: no
---
**Một câu:** EntityManager là object trung tâm của JPA để quản lý entity (persist, find, merge, remove, query).

## Giải thích
Thay vì tự viết SQL cho mọi thao tác, code nói với EntityManager, nó theo dõi entity nào thay đổi rồi flush xuống DB. Nó giữ một [Persistence Context](persistence-context.md). Hai hiểu nhầm hay gặp: nó không phải connection (nó DÙNG connection qua Hibernate + JDBC), và nó không thread-safe (trong Spring, [shared proxy](shared-entity-manager.md) lo chuyển tiếp đúng Session theo transaction).

## Ví dụ
`SimpleJpaRepository(Order)` giữ một EntityManager; `save(order)` gọi `persist`, entity thành Managed trong Persistence Context.

## Liên kết
- **Nền:** [Entity to Row](entity-to-row.md)
- **Sâu hơn:** [Persistence Context](persistence-context.md) · [Shared Entity Manager](shared-entity-manager.md)
- **Bên cạnh:** [Connection](connection.md)
