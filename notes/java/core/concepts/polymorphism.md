---
title: Polymorphism
tags: [java, interface]
status: draft
verified: no
---
**Một câu:** Ta khai báo thứ cần dùng bằng interface, nhưng lúc chạy thứ được đưa vào luôn là một object thật của một class cụ thể.

## Giải thích
Kiểu **khai báo** (interface) chỉ cho biết ta được phép gọi những method nào. Object **thật** đứng sau luôn thuộc một class cụ thể, vì interface không thể tạo ra object. Khi gọi method qua kiểu khai báo, Java chạy method của class thật (dynamic dispatch).

## Ví dụ
Trong project `study`, `UserController` khai báo `private final UserService userService`. Lúc chạy, object được đưa vào là `UserServiceImpl` (thường được Spring bọc trong một proxy vì có `@Transactional`).

## Liên kết
- **Nền:** [Interface](interface.md) · [Instance](instance.md)
- **Bên cạnh:** [Repository Proxy](../../../spring/data/jpa/concepts/repository-proxy.md) (interface repository không có class nào ta viết, object thật do Spring Data sinh)
