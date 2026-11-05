---
title: Repository
tags: [spring-data, jpa]
status: draft
verified: no
---
**Một câu:** Repository chỉ là interface, Spring Data tự sinh implementation lúc chạy.

## Ví dụ
Ta khai báo cần gì, framework lo làm như thế nào. `OrderRepository` kế thừa save/findById từ `JpaRepository`, findAll(Spec) từ `JpaSpecificationExecutor`, tự khai báo `findWithDetailsById`.

## Liên kết
- **Sâu hơn:** [Repository Proxy](repository-proxy.md)
- **Bên cạnh:** [JpaSpecificationExecutor](jpa-specification-executor.md) · [Repository Hierarchy](../architecture/repository-hierarchy.md) · [Repository Bootstrap](../../../flow/repository-bootstrap.md)
