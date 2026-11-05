# Spring Data JPA: concepts

Cần biết trước: [Polymorphism](../../../../../java/core/concepts/polymorphism.md).

```mermaid
flowchart TD
    R[Repository] --> P[Repository Proxy]
    R --> S[SimpleJpaRepository]
    P -->|target| S
    P -->|target| Q[Query Executor]
    R -.-> J[JpaSpecificationExecutor]
```

1. [Repository](repository.md)
2. [SimpleJpaRepository](simple-jpa-repository.md)
3. [Repository Proxy](repository-proxy.md)
4. [Query Executor](query-executor.md)
5. [JpaSpecificationExecutor](jpa-specification-executor.md)

Xem thêm: [architecture](../architecture/README.md) · [flow](../flow/README.md)
