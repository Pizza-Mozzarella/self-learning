# Backend: architecture

<!-- map:start -->
_Sơ đồ tự sinh từ link trong các note, đừng sửa tay: `node tools/notes.js map`._

```mermaid
flowchart TD
    n0["Repository to Database"]:::draft
    n1["Entity Manager Containment<br/>(jpa/architecture)"]:::ext
    n2["Repository Hierarchy<br/>(jpa/architecture)"]:::ext
    n3["Repository Bootstrap<br/>(spring/flow)"]:::ext
    n0 --> n1
    n0 -.- n3
    n2 --> n0
    classDef stub fill:#eeeeee,stroke:#999999,stroke-dasharray:4 3,color:#555555
    classDef draft fill:#fff4cc,stroke:#c9a227,color:#333333
    classDef ok fill:#d8f0dc,stroke:#3a9d5d,color:#222222
    classDef ext fill:#ffffff,stroke:#999999,color:#555555
```

_Chú thích: mũi tên A → B: B là phần con hoặc chi tiết của A · nét đứt: liên quan ngang cấp, không có thứ tự · ô vàng: draft (đã viết, chưa chốt) · ô viền nhạt: note ở thư mục khác._
<!-- map:end -->

Cấu trúc tĩnh xuyên nhiều chủ đề (Spring, JPA, JDBC, database), không thuộc riêng chủ đề nào.

1. [Repository to Database](repository-to-database.md): từ Application.Run tới Database

Theo từng chủ đề: [Spring Data JPA](../spring/data/jpa/architecture/README.md) · [JPA](../jpa/architecture/README.md)
