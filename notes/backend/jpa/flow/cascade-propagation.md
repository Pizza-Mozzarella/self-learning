---
title: Cascade Propagation
tags: [jpa, relationship, flow]
status: draft
verified: no
---
**Một câu:** Thao tác nào có trong danh sách cascade thì lan từ cha sang con khi thực hiện trên cha.

```mermaid
sequenceDiagram
    participant Service
    participant EM as EntityManager
    participant Parent as Order (cha)
    participant Child as OrderItem (con)
    Service->>EM: persist(order)
    EM->>Parent: đưa vào PC → Managed
    Note over EM: cascade = ALL có PERSIST → lan
    EM->>Child: persist(item) theo → Managed
```

## Liên kết
- **Nền:** [Cascade](../concepts/cascade.md) · [Entity Lifecycle](entity-lifecycle.md)
- **Bên cạnh:** [Orphan Removal](../concepts/orphan-removal.md)
