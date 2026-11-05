# JPA: concepts

Cần biết trước: [Polymorphism](../../../java/core/concepts/polymorphism.md).

```mermaid
flowchart TD
    E2R[Entity to Row] --> EM[Entity Manager]
    EM -->|giữ| PC[Persistence Context]
    EM -->|qua proxy| SEM[Shared Entity Manager]
    EM -.->|dùng| C[Connection]
    EM --> CAS[Cascade]
    CAS --> OR[Orphan Removal]
```

1. [Entity to Row](entity-to-row.md)
2. [Entity Manager](entity-manager.md)
3. [Persistence Context](persistence-context.md)
4. [Shared Entity Manager](shared-entity-manager.md)
5. [Cascade](cascade.md)
6. [Orphan Removal](orphan-removal.md)
7. [Connection](connection.md): stub

Xem thêm: [architecture](../architecture/README.md) · [flow](../flow/README.md)
