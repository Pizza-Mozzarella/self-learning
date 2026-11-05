---
title: Flush and Dirty Checking
tags: [jpa, entity-manager, flow]
status: draft
verified: no
---
**Một câu:** Thay đổi trên entity chỉ xuống DB khi có cơ chế mang nó đi: [Managed](../glossary.md#managed) thì [dirty checking](../glossary.md#dirty-checking) lo, [Detached](../glossary.md#detached) thì chỉ [save](../glossary.md#merge) (merge) mới mang được.

```mermaid
flowchart TD
    Change["Đổi field trên entity"] --> Q{"Entity đang ở trạng thái nào?"}
    Q -->|Managed| Dirty["Dirty checking phát hiện"]
    Dirty --> Flush["Flush trước commit sinh SQL"]
    Flush --> Commit["Commit làm bền"]
    Q -->|Detached, không save| Lost["Mất: không PC, không transaction, không flush"]
    Q -->|Detached, có save| Merge["save → merge copy trạng thái lên Managed"]
    Merge --> Flush
```

## Giải thích
- Managed, không save: vẫn lưu (dirty checking lo).
- Detached, không save: mất.
- Detached, có save: lưu (merge → UPDATE lúc flush, bền lúc commit).
- Flush chạy TRƯỚC, commit SAU. Commit là lần chốt bền đầu tiên và duy nhất, tách hai bước để có điểm quyết định. `setSellPrice` chỉ đổi entity trong PC; UPDATE xuất hiện lúc flush trước commit, không phải lúc set.

## Liên kết
- **Nền:** [Entity Lifecycle](entity-lifecycle.md) · [Persistence Context](../concepts/persistence-context.md)
- **Bên cạnh:** [Save Entity](../../flow/save-entity.md)
