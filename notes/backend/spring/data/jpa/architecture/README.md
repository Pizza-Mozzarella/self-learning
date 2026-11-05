# Spring Data JPA: architecture

<!-- map:start -->
_Sơ đồ tự sinh từ link trong các note, đừng sửa tay: `node tools/notes.js map`._

```mermaid
flowchart TD
    n0["Repository Hierarchy"]:::draft
    n1["Repository to Database<br/>(backend/architecture)"]:::ext
    n2["Repository<br/>(jpa/concepts)"]:::ext
    n3["SimpleJpaRepository<br/>(jpa/concepts)"]:::ext
    n0 --> n1
    n2 --> n0
    n0 --> n3
    classDef stub fill:#eeeeee,stroke:#999999,stroke-dasharray:4 3,color:#555555
    classDef draft fill:#fff4cc,stroke:#c9a227,color:#333333
    classDef ok fill:#d8f0dc,stroke:#3a9d5d,color:#222222
    classDef ext fill:#ffffff,stroke:#999999,color:#555555
```
<!-- map:end -->

Cấu trúc tĩnh, chỉ trong phạm vi Spring Data JPA. Thứ tự đọc:

1. [Repository Hierarchy](repository-hierarchy.md): cây kế thừa

Xem thêm: [concepts](../concepts/README.md) · [flow](../flow/README.md) · [bức tranh xuyên backend](../../../../architecture/README.md)
