---
title: Shared Entity Manager
tags: [jpa, entity-manager, proxy]
status: draft
verified: no
---
**Một câu:** Thứ ta cầm trong Spring không phải EntityManager thật mà là một shared proxy, chuyển tiếp tới Session của transaction hiện tại.

## Giải thích
Proxy này nằm trong container nhưng không phải bean. Mỗi transaction có một Session thật riêng bên dưới (Session chính là EntityManager, `Session extends EntityManager`), sinh và chết theo transaction. Nhờ proxy, EntityManager không thread-safe vẫn dùng được giữa các thread: mỗi thread đi đúng Session của transaction của nó. Quan hệ là TARGET, không phải chứa.

## Liên kết
- **Nền:** [Entity Manager](entity-manager.md) · [Repository Proxy](../../spring/data/jpa/concepts/repository-proxy.md)
- **Cấu trúc:** [Entity Manager Containment](../architecture/entity-manager-containment.md)
