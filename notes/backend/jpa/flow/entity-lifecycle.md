---
title: Entity Lifecycle
tags: [jpa, entity-manager, flow]
status: draft
verified: no
---
**Một câu:** Vòng đời của entity là quan hệ của nó với Persistence Context, không phải trạng thái của row trong DB.

```mermaid
stateDiagram-v2
    [*] --> Transient : new
    Transient --> Managed : persist
    Database --> Managed : load (findById)
    Detached --> Managed : merge
    Managed --> Detached : hết transaction (EM đóng, PC dọn)
    Managed --> Removed : remove
    Managed --> Detached : rollback
    Removed --> Detached : rollback
    Removed --> [*] : flush (xóa row)
```

## Giải thích
- **4 trạng thái:** Transient (chưa vào PC), Managed (đang trong PC), Detached (đã ra khỏi PC nhưng object còn đủ dữ liệu trong RAM), Removed (đánh dấu hủy, chờ flush).
- **Vào Managed có 3 đường:** persist (entity mới), load (entity đã có trong DB), merge (từ Detached về).
- **Ra khỏi Managed:** hết transaction thì thành Detached, remove thì thành Removed.
- **Rollback** là hành động trên transaction, không phải trên trạng thái entity: nó hủy SQL đã flush và dọn PC, đưa Managed/Removed về Detached, không bao giờ về Transient (Transient chưa vào PC nên không có gì để rollback).

## Liên kết
- **Nền:** [Persistence Context](../concepts/persistence-context.md)
- **Sâu hơn:** [Flush and Dirty Checking](flush-and-dirty-checking.md)
