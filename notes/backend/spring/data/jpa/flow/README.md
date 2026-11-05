# Spring Data JPA: flow

<!-- map:start -->
_Sơ đồ tự sinh từ link trong các note, đừng sửa tay: `node tools/notes.js map`._

```mermaid
flowchart TD
    n0["Repository Dispatch"]:::draft
    n1["Query Executor<br/>(jpa/concepts)"]:::ext
    n2["Repository Proxy<br/>(jpa/concepts)"]:::ext
    n3["Repository Bootstrap<br/>(spring/flow)"]:::ext
    n1 --> n0
    n2 --> n0
    n3 --> n0
    classDef stub fill:#eeeeee,stroke:#999999,stroke-dasharray:4 3,color:#555555
    classDef draft fill:#fff4cc,stroke:#c9a227,color:#333333
    classDef ok fill:#d8f0dc,stroke:#3a9d5d,color:#222222
    classDef ext fill:#ffffff,stroke:#999999,color:#555555
```

_Chú thích: mũi tên A → B: B là phần con hoặc chi tiết của A · ô vàng: draft (đã viết, chưa chốt) · ô viền nhạt: note ở thư mục khác._
<!-- map:end -->

Luồng chạy chỉ trong phạm vi Spring Data JPA. Thứ tự đọc:

1. [Repository Dispatch](repository-dispatch.md): lúc chạy, một lời gọi rẽ đi đâu

Xem thêm: [concepts](../concepts/README.md) · [architecture](../architecture/README.md) · [khởi động (xuyên Spring)](../../../flow/README.md) · [xuyên backend](../../../../flow/README.md)
