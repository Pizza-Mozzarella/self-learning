# JPA: concepts

<!-- map:start -->
_Sơ đồ tự sinh từ link trong các note, đừng sửa tay: `node tools/notes.js map`._

```mermaid
flowchart TD
    n0["Cascade"]:::draft
    n1["Connection"]:::stub
    n2["Entity Manager"]:::draft
    n3["Entity to Row"]:::draft
    n4["Orphan Removal"]:::draft
    n5["Persistence Context"]:::draft
    n6["Shared Entity Manager"]:::draft
    n7["Save Entity<br/>(backend/flow)"]:::ext
    n8["Entity Manager Containment<br/>(jpa/architecture)"]:::ext
    n9["Cascade Propagation<br/>(jpa/flow)"]:::ext
    n10["Entity Lifecycle<br/>(jpa/flow)"]:::ext
    n11["Flush and Dirty Checking<br/>(jpa/flow)"]:::ext
    n12["Repository Proxy<br/>(jpa/concepts)"]:::ext
    n3 --> n7
    n2 --> n7
    n2 --> n8
    n5 --> n8
    n2 --> n0
    n0 --> n9
    n0 -.- n4
    n2 --> n1
    n3 --> n2
    n2 --> n5
    n2 --> n6
    n2 -.- n1
    n3 -.- n2
    n0 --> n4
    n5 --> n10
    n12 --> n6
    n9 -.- n4
    n5 --> n11
    classDef stub fill:#eeeeee,stroke:#999999,stroke-dasharray:4 3,color:#555555
    classDef draft fill:#fff4cc,stroke:#c9a227,color:#333333
    classDef ok fill:#d8f0dc,stroke:#3a9d5d,color:#222222
    classDef ext fill:#ffffff,stroke:#999999,color:#555555
```
<!-- map:end -->

Cần biết trước: [Polymorphism](../../../java/core/concepts/polymorphism.md).

1. [Entity to Row](entity-to-row.md)
2. [Entity Manager](entity-manager.md)
3. [Persistence Context](persistence-context.md)
4. [Shared Entity Manager](shared-entity-manager.md)
5. [Cascade](cascade.md)
6. [Orphan Removal](orphan-removal.md)
7. [Connection](connection.md): stub

Xem thêm: [architecture](../architecture/README.md) · [flow](../flow/README.md)
