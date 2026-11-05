---
title: Polymorphism
tags: [java, interface]
status: draft
verified: no
---
**Một câu:** Ta khai báo thứ cần dùng bằng interface, nhưng lúc chạy thứ được đưa vào luôn là một object thật của một class cụ thể.

## Ví dụ
`UserController` khai báo `UserService`; lúc chạy object là `UserServiceImpl` (thường bọc proxy vì có `@Transactional`).

## Liên kết
- **Nền:** [Interface](interface.md) · [Instance](instance.md)
- **Bên cạnh:** [Repository Proxy](../../../backend/spring/data/jpa/concepts/repository-proxy.md)
