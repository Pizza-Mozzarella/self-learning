---
title: Repository
tags: [spring-data, jpa]
status: draft
verified: no
---
**Một câu:** Repository chỉ là interface, không có code; Spring Data tự sinh implementation lúc chạy: ta khai báo CẦN GÌ, framework lo LÀM NHƯ THẾ NÀO.

## Ví dụ
`OrderRepository` kế thừa save/findById từ `JpaRepository`, findAll(Spec) từ `JpaSpecificationExecutor`, tự khai báo `findWithDetailsById`.

## Liên kết
- **Sâu hơn:** [SimpleJpaRepository](simple-jpa-repository.md) · [Repository Proxy](repository-proxy.md) · [Query Executor](query-executor.md)
- **Bên cạnh:** [JpaSpecificationExecutor](jpa-specification-executor.md)
- **Cấu trúc:** [Repository Hierarchy](../architecture/repository-hierarchy.md) · **Flow:** [Repository Bootstrap](../../../flow/repository-bootstrap.md)
