---
title: Entity Manager
tags: [jpa, entity-manager]
status: draft
verified: no
---
**Một câu:** EntityManager là object trung tâm của JPA để quản lý entity (persist, find, merge, remove, query).

## Ghi chú nhanh
- Không phải connection: nó DÙNG connection qua Hibernate + JDBC.
- Không thread-safe; trong Spring có [shared proxy](shared-entity-manager.md) lo chuyển tiếp.

## Ví dụ
`SimpleJpaRepository(Order)` giữ một EntityManager; `save(order)` gọi `persist`, entity thành Managed.

## Liên kết
- **Nền:** [Entity to Row](entity-to-row.md)
- **Sâu hơn:** [Persistence Context](persistence-context.md) · [Shared Entity Manager](shared-entity-manager.md)
- **Bên cạnh:** [Connection](connection.md)
