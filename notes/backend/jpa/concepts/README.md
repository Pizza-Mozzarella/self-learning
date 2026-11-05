# JPA: concepts

<!-- map:start -->
_Sơ đồ tự sinh từ link trong các note, đừng sửa tay: `node tools/notes.js map`._

```mermaid
flowchart TD
    n0["Cascade Parent-Child Only"]:::draft
    n1["Cascade"]:::draft
    n2["Collection to Child Table"]:::draft
    n3["Connection"]:::stub
    n4["Entity Manager Is Not a Connection"]:::draft
    n5["Entity Manager Is Not Thread-Safe"]:::draft
    n6["Entity Manager"]:::draft
    n7["Entity to Row"]:::draft
    n8["Orphan Removal"]:::draft
    n9["Persistence Context"]:::draft
    n10["Reference to Foreign Key"]:::draft
    n11["Shared Entity Manager"]:::draft
    n12["Simple Field to Column"]:::draft
    n13["Save Entity<br/>(backend/flow)"]:::ext
    n14["Entity Manager Containment<br/>(jpa/architecture)"]:::ext
    n15["Cascade Propagation<br/>(jpa/flow)"]:::ext
    n16["Entity Lifecycle<br/>(jpa/flow)"]:::ext
    n1 --> n15
    n1 --> n0
    n1 -.- n8
    n4 -.- n3
    n5 --> n11
    n6 --> n9
    n6 --> n11
    n6 --> n4
    n6 --> n5
    n6 -.- n3
    n7 --> n13
    n7 --> n10
    n7 --> n2
    n7 --> n12
    n7 -.- n6
    n9 --> n16
    n9 --> n14
    n11 -.- n14
    n15 -.- n8
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
11. [Reference to Foreign Key](reference-to-foreign-key.md)
12. [Collection to Child Table](collection-to-child-table.md)
13. [Simple Field to Column](simple-field-to-column.md)

Xem thêm: [architecture](../architecture/README.md) · [flow](../flow/README.md)

Thuật ngữ: [glossary](../glossary.md)
