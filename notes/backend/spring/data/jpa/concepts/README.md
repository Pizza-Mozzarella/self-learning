# Spring Data JPA: concepts

<!-- map:start -->
_Sơ đồ tự sinh từ link trong các note, đừng sửa tay: `node tools/notes.js map`._

```mermaid
flowchart TD
    n0["JpaSpecificationExecutor"]:::draft
    n1["Query Executor"]:::draft
    n2["Repository Proxy"]:::draft
    n3["Repository"]:::draft
    n4["SimpleJpaRepository"]:::draft
    n5["Shared Entity Manager<br/>(jpa/concepts)"]:::ext
    n6["Repository Hierarchy<br/>(jpa/architecture)"]:::ext
    n7["Repository Dispatch<br/>(jpa/flow)"]:::ext
    n8["Repository Bootstrap<br/>(spring/flow)"]:::ext
    n9["Polymorphism<br/>(core/concepts)"]:::ext
    n2 --> n5
    n3 --> n6
    n6 --> n4
    n3 --> n0
    n2 --> n1
    n1 --> n7
    n3 --> n2
    n9 --> n2
    n2 --> n7
    n3 --> n4
    n3 --> n1
    n3 -.- n0
    n4 -.- n2
    n4 --> n7
    n2 --> n8
    n9 -.- n2
    classDef stub fill:#eeeeee,stroke:#999999,stroke-dasharray:4 3,color:#555555
    classDef draft fill:#fff4cc,stroke:#c9a227,color:#333333
    classDef ok fill:#d8f0dc,stroke:#3a9d5d,color:#222222
    classDef ext fill:#ffffff,stroke:#999999,color:#555555
```

_Chú thích: mũi tên A → B: học A trước, B nối tiếp hoặc đào sâu của A · nét đứt: liên quan ngang cấp, không có thứ tự · ô vàng: draft (đã viết, chưa chốt) · ô viền nhạt: note ở thư mục khác._
<!-- map:end -->

Cần biết trước: [Polymorphism](../../../../../java/core/concepts/polymorphism.md).

1. [Repository](repository.md)
2. [SimpleJpaRepository](simple-jpa-repository.md)
3. [Repository Proxy](repository-proxy.md)
4. [Query Executor](query-executor.md)
5. [JpaSpecificationExecutor](jpa-specification-executor.md)

Xem thêm: [architecture](../architecture/README.md) · [flow](../flow/README.md)
