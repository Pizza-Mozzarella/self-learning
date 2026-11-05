---
title: Query Executor
tags: [spring-data, jpa]
status: draft
verified: no
---
**Một câu:** Query executor phân tích tên method (và annotation) thành query chuẩn bị sẵn lúc startup, lúc chạy chỉ việc chạy.

## Giải thích
Mỗi method ta tự khai báo trong repository có một query executor riêng, ví dụ `PartTreeJpaQuery` cho `findWithDetailsById`. Nó nằm trong [proxy](repository-proxy.md) làm target, không phải bean riêng.

## Liên kết
- **Nền:** [Repository Proxy](repository-proxy.md)
- **Sâu hơn:** [Repository Dispatch](../flow/repository-dispatch.md)
