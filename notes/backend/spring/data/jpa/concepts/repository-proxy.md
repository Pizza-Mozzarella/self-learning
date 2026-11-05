---
title: Repository Proxy
tags: [spring-data, jpa, proxy]
status: draft
verified: no
---
**Một câu:** Bean Repository mà Spring inject chính là một proxy: nó không chứa code làm việc thật, chỉ điều hướng từng method tới target.

## Ví dụ
`UserRepository` chỉ là interface; object được đưa vào `UserServiceImpl` là proxy này.

## Liên kết
- **Nền:** [Repository](repository.md) · [Polymorphism](../../../../../java/core/concepts/polymorphism.md)
- **Sâu hơn:** [SimpleJpaRepository](simple-jpa-repository.md) · [Query Executor](query-executor.md) · [Repository Dispatch](../flow/repository-dispatch.md)
