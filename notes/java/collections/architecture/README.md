# collections: architecture

<!-- map:start -->
_Sơ đồ tự sinh từ link trong các note, đừng sửa tay: `node tools/notes.js map`._

```mermaid
flowchart TD
    n0["Collection Hierarchy"]:::draft
    n1["Hash Chooses the Bucket"]:::draft
    n2["HashMap Structure"]:::draft
    n2 -.- n0
    classDef stub fill:#eeeeee,stroke:#999999,stroke-dasharray:4 3,color:#555555
    classDef draft fill:#fff4cc,stroke:#c9a227,color:#333333
    classDef ok fill:#d8f0dc,stroke:#3a9d5d,color:#222222
    classDef ext fill:#ffffff,stroke:#999999,color:#555555
```

_Chú thích: nét đứt: liên quan ngang cấp, không có thứ tự · ô vàng: draft (đã viết, chưa chốt)._
<!-- map:end -->

1. [Collection Hierarchy](collection-hierarchy.md)
2. [HashMap Structure](hashmap-structure.md)
3. [Hash Chooses the Bucket](hash-chooses-the-bucket.md)
