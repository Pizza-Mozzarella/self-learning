# JPA: concepts

<!-- map:start -->
_Sơ đồ tự sinh từ link trong các note, đừng sửa tay: `node tools/notes.js map`._

```mermaid
flowchart TD
    n0["Cascade Parent-Child Only"]:::draft
    n1["Cascade"]:::draft
    n2["Connection"]:::stub
    n3["Entity Manager Is Not a Connection"]:::draft
    n4["Entity Manager Is Not Thread-Safe"]:::draft
    n5["Entity Manager"]:::draft
    n6["Entity to Row"]:::draft
    n7["Orphan Removal"]:::draft
    n8["Persistence Context"]:::draft
    n9["Shared Entity Manager"]:::draft
    n10["Save Entity<br/>(backend/flow)"]:::ext
    n11["Entity Manager Containment<br/>(jpa/architecture)"]:::ext
    n12["Cascade Propagation<br/>(jpa/flow)"]:::ext
    n13["Entity Lifecycle<br/>(jpa/flow)"]:::ext
    n1 --> n12
    n1 --> n0
    n1 -.- n7
    n3 -.- n2
    n4 --> n9
    n5 --> n8
    n5 --> n9
    n5 --> n3
    n5 --> n4
    n5 -.- n2
    n6 --> n10
    n6 -.- n5
    n8 --> n13
    n8 --> n11
    n12 -.- n7
    classDef stub fill:#eeeeee,stroke:#999999,stroke-dasharray:4 3,color:#555555
    classDef draft fill:#fff4cc,stroke:#c9a227,color:#333333
    classDef ok fill:#d8f0dc,stroke:#3a9d5d,color:#222222
    classDef ext fill:#ffffff,stroke:#999999,color:#555555
```

_Chú thích: mũi tên A → B: B là phần con hoặc chi tiết của A · nét đứt: liên quan ngang cấp, không có thứ tự · ô vàng: draft (đã viết, chưa chốt) · ô xám nét đứt: stub (chưa học) · ô viền nhạt: note ở thư mục khác._
<!-- map:end -->

Cần biết trước: [Polymorphism](../../../java/core/concepts/polymorphism.md).

1. [Entity to Row](entity-to-row.md)
2. [Entity Manager](entity-manager.md)
3. [Persistence Context](persistence-context.md)
4. [Shared Entity Manager](shared-entity-manager.md)
5. [Entity Manager Is Not a Connection](entity-manager-is-not-connection.md)
6. [Entity Manager Is Not Thread-Safe](entity-manager-is-not-thread-safe.md)
7. [Cascade](cascade.md)
8. [Cascade Parent-Child Only](cascade-parent-child-only.md)
9. [Orphan Removal](orphan-removal.md)
10. [Connection](connection.md): stub

Xem thêm: [architecture](../architecture/README.md) · [flow](../flow/README.md)

Thuật ngữ: [glossary](../glossary.md)
