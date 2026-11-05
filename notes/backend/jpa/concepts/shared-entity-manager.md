---
title: Shared Entity Manager
tags: [jpa, entity-manager, proxy]
status: draft
verified: no
---
**Một câu:** Thứ ta cầm trong Spring không phải EntityManager thật mà là một [shared proxy](../glossary.md#shared-proxy), chuyển tiếp tới [Session](../glossary.md#session) của transaction hiện tại.

## Liên kết
- **Nền:** [Entity Manager](entity-manager.md) · [Repository Proxy](../../spring/data/jpa/concepts/repository-proxy.md)
- **Bên cạnh:** [Containment](../architecture/entity-manager-containment.md)
