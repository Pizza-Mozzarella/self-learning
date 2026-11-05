# Backend: flow

<!-- map:start -->
_Sơ đồ tự sinh từ link trong các note, đừng sửa tay: `node tools/notes.js map`._

```mermaid
flowchart TD
    n0["Save Entity"]:::draft
    n1["Entity Manager<br/>(jpa/concepts)"]:::ext
    n2["Entity to Row<br/>(jpa/concepts)"]:::ext
    n3["Flush and Dirty Checking<br/>(jpa/flow)"]:::ext
    n2 --> n0
    n1 --> n0
    n0 --> n3
    n3 -.- n0
    classDef stub fill:#eeeeee,stroke:#999999,stroke-dasharray:4 3,color:#555555
    classDef draft fill:#fff4cc,stroke:#c9a227,color:#333333
    classDef ok fill:#d8f0dc,stroke:#3a9d5d,color:#222222
    classDef ext fill:#ffffff,stroke:#999999,color:#555555
```
<!-- map:end -->

Luồng chạy xuyên nhiều chủ đề (Spring, JPA, Hibernate, JDBC, database), không thuộc riêng chủ đề nào.

1. [Save Entity](save-entity.md): một lệnh lưu đi qua các tầng

Theo từng chủ đề: [Spring](../spring/flow/README.md) · [Spring Data JPA](../spring/data/jpa/flow/README.md) · [JPA](../jpa/flow/README.md)
