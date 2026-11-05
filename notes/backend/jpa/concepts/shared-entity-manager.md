---
title: Shared Entity Manager
tags: [jpa, entity-manager, proxy]
status: draft
verified: no
---
**Một câu:** Thứ ta cầm trong Spring không phải EntityManager thật mà là một shared proxy, chuyển tiếp tới Session của transaction hiện tại.

## Ghi chú nhanh
- Nằm trong container nhưng không phải bean; quan hệ là TARGET, không phải chứa.
- Session chính là EntityManager (`Session extends EntityManager`), sinh và chết theo transaction.

## Liên kết
- **Nền:** [Entity Manager](entity-manager.md) · [Repository Proxy](../../spring/data/jpa/concepts/repository-proxy.md)
- **Cấu trúc:** [Containment](../architecture/entity-manager-containment.md)
