---
title: Repository Proxy
tags: [spring-data, jpa, proxy]
status: draft
verified: no
---
**Một câu:** Bean Repository mà Spring inject chính là một proxy: nó không chứa code làm việc thật, chỉ điều hướng từng method tới target.

## Giải thích
Proxy do `JpaRepositoryFactory` tạo (qua `ProxyFactory`, là JDK dynamic proxy). Nó chứa [SimpleJpaRepository](simple-jpa-repository.md) và [Query Executor](query-executor.md) làm target. Spring inject proxy vào Service, không biết gì về Simple. Cách điều hướng xem [Repository Dispatch](../flow/repository-dispatch.md).

## Ví dụ
`UserRepository` trong project `study` chỉ là interface. Object được đưa vào `UserServiceImpl` là proxy này, không phải class do ta viết.

## Liên kết
- **Nền:** [Repository](repository.md) · [Polymorphism](../../../../java/core/concepts/polymorphism.md)
- **Sâu hơn:** [Repository Dispatch](../flow/repository-dispatch.md)
