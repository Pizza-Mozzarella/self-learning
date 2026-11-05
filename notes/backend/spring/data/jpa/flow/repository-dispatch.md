---
title: Repository Dispatch
tags: [spring-data, jpa, proxy]
status: draft
verified: no
---
**Một câu:** Proxy là cái ngã tư: method chuẩn rẽ sang SimpleJpaRepository, method query rẽ sang query executor, method custom rẽ sang class custom của ta.

## Sơ đồ điều hướng lúc chạy

```mermaid
flowchart TD
    Call["Gọi method trên proxy"] --> Q{"Loại method?"}
    Q -->|chuẩn| Simple["SimpleJpaRepository"]
    Q -->|query| Executor["Query executor"]
    Q -->|custom| Custom["Class custom"]
```

Bản thân proxy không chứa code làm việc thật nào.

## Liên kết
- **Nền:** [Repository Proxy](../concepts/repository-proxy.md) · [Repository Bootstrap](../../../flow/repository-bootstrap.md)
- **Sâu hơn:** [SimpleJpaRepository](../concepts/simple-jpa-repository.md) · [Query Executor](../concepts/query-executor.md)
