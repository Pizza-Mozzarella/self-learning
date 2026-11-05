---
title: Entity Manager
tags: [jpa, entity-manager]
status: draft
verified: no
---
**Một câu:** EntityManager là object trung tâm của JPA để quản lý entity (persist, find, merge, remove, query).

## Ví dụ
`SimpleJpaRepository(Order)` giữ một EntityManager; `save(order)` gọi `persist`, entity thành Managed.

## Liên kết
- **Nền:** [Entity to Row](entity-to-row.md)
- **Sâu hơn:** [Persistence Context](persistence-context.md) · [Shared Entity Manager](shared-entity-manager.md) · [Không phải connection](entity-manager-is-not-connection.md) · [Không thread-safe](entity-manager-is-not-thread-safe.md)
- **Bên cạnh:** [Connection](connection.md)
