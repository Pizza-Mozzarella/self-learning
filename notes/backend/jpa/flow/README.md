# JPA: flow

<!-- map:start -->
_Sơ đồ tự sinh từ link trong các note, đừng sửa tay: `node tools/notes.js map`._

```mermaid
flowchart TD
    n0["Cascade Propagation"]:::draft
    n1["Entity Lifecycle"]:::draft
    n2["Flush and Dirty Checking"]:::draft
    n3["Save Entity<br/>(backend/flow)"]:::ext
    n4["Cascade<br/>(jpa/concepts)"]:::ext
    n5["Orphan Removal<br/>(jpa/concepts)"]:::ext
    n6["Persistence Context<br/>(jpa/concepts)"]:::ext
    n3 --> n2
    n4 --> n0
    n6 --> n1
    n0 -.- n5
    n1 --> n2
    n2 -.- n3
    classDef stub fill:#eeeeee,stroke:#999999,stroke-dasharray:4 3,color:#555555
    classDef draft fill:#fff4cc,stroke:#c9a227,color:#333333
    classDef ok fill:#d8f0dc,stroke:#3a9d5d,color:#222222
    classDef ext fill:#ffffff,stroke:#999999,color:#555555
```

_Chú thích: mũi tên A → B: B là phần con hoặc chi tiết của A · nét đứt: liên quan ngang cấp, không có thứ tự · ô vàng: draft (đã viết, chưa chốt) · ô viền nhạt: note ở thư mục khác._
<!-- map:end -->

Luồng chạy chỉ trong phạm vi JPA. Thứ tự đọc:

1. [Entity Lifecycle](entity-lifecycle.md): bốn trạng thái của entity
2. [Flush and Dirty Checking](flush-and-dirty-checking.md): thay đổi xuống DB bằng cơ chế nào
3. [Cascade Propagation](cascade-propagation.md): thao tác lan từ cha sang con

Xem thêm: [concepts](../concepts/README.md) · [architecture](../architecture/README.md) · [một lệnh lưu đi qua các tầng](../../flow/README.md)

Thuật ngữ: [glossary](../glossary.md)
