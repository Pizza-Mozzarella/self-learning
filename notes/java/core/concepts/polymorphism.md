---
title: Polymorphism
tags: [java, interface]
status: draft
verified: no
---
**Một câu:** Ta khai báo thứ cần dùng bằng [interface](../glossary.md#interface), nhưng lúc chạy thứ được đưa vào luôn là một [instance](../glossary.md#instance) thật của một class cụ thể.

## Ví dụ
`UserController` khai báo `UserService`; lúc chạy object là `UserServiceImpl` (thường bọc proxy vì có `@Transactional`).

## Liên kết
- **Bên cạnh:** [Repository Proxy](../../../backend/spring/data/jpa/concepts/repository-proxy.md)
