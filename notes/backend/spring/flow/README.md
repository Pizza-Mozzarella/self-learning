# Spring: flow

<!-- map:start -->
_Sơ đồ tự sinh từ link trong các note, đừng sửa tay: `node tools/notes.js map`._

```mermaid
flowchart TD
    n0["Repository Bootstrap"]:::draft
    n1["Repository Proxy<br/>(jpa/concepts)"]:::ext
    n2["Repository Dispatch<br/>(jpa/flow)"]:::ext
    n0 --> n2
    n1 --> n0
    classDef stub fill:#eeeeee,stroke:#999999,stroke-dasharray:4 3,color:#555555
    classDef draft fill:#fff4cc,stroke:#c9a227,color:#333333
    classDef ok fill:#d8f0dc,stroke:#3a9d5d,color:#222222
    classDef ext fill:#ffffff,stroke:#999999,color:#555555
```
<!-- map:end -->

Luồng chạy xuyên nhiều dự án Spring (Framework và Data).

1. [Repository Bootstrap](repository-bootstrap.md): khởi động, từ Application.Run tới bean repository

Xem thêm: [Spring Data JPA](../data/jpa/flow/README.md) · [xuyên backend](../../flow/README.md)
