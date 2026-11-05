# Notes

<!-- tree:start -->
_Cây thư mục tự sinh, đừng sửa tay: `node tools/notes.js map`._

```mermaid
flowchart TD
    d0["notes/"]
    d1["backend/"]
    d0 --> d1
    d2["architecture/<br/>1 note"]
    d1 --> d2
    d3["database/"]
    d1 --> d3
    d4["concepts/<br/>2 note"]
    d3 --> d4
    d5["flow/<br/>1 note"]
    d1 --> d5
    d6["jpa/"]
    d1 --> d6
    d7["architecture/<br/>1 note"]
    d6 --> d7
    d8["concepts/<br/>7 note"]
    d6 --> d8
    d9["flow/<br/>3 note"]
    d6 --> d9
    d10["spring/"]
    d1 --> d10
    d11["data/"]
    d10 --> d11
    d12["jpa/"]
    d11 --> d12
    d13["architecture/<br/>1 note"]
    d12 --> d13
    d14["concepts/<br/>5 note"]
    d12 --> d14
    d15["flow/<br/>1 note"]
    d12 --> d15
    d16["flow/<br/>1 note"]
    d10 --> d16
    d17["java/"]
    d0 --> d17
    d18["core/"]
    d17 --> d18
    d19["concepts/<br/>3 note"]
    d18 --> d19
```

_Chú thích: mỗi ô là một thư mục; số note là số note nằm trực tiếp trong thư mục đó._
<!-- tree:end -->

- [java/core](java/core/concepts/README.md)
- [backend](backend/README.md)

Trong mỗi chủ đề có ba loại: `concepts` (note nguyên tử, là gì), `architecture` (cấu trúc tĩnh), `flow` (luồng chạy). Note xuyên nhiều chủ đề nằm ở thư mục cha chung của chúng.
