---
title: Entity Lifecycle
tags: [jpa, entity-manager, flow]
status: draft
verified: no
---
**Một câu:** Vòng đời của entity là quan hệ của nó với [Persistence Context](../glossary.md#persistence-context), không phải trạng thái của row trong DB.

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

## Liên kết
- **Nền:** [Persistence Context](../concepts/persistence-context.md)
- **Sâu hơn:** [Flush and Dirty Checking](flush-and-dirty-checking.md)
