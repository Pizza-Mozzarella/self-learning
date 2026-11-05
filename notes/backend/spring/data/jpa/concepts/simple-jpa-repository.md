---
title: SimpleJpaRepository
tags: [spring-data, jpa]
status: draft
verified: no
---
**Một câu:** SimpleJpaRepository là class viết sẵn làm việc thật cho các method chuẩn của repository.

## Giải thích
Nó implements `JpaRepositoryImplementation`. Nó giữ một `EntityManager` qua constructor (nó giữ EntityManager, EntityManager không biết nó tồn tại). Nó chỉ được `new` bởi `JpaRepositoryFactory`, không phải bean và không bao giờ được inject: Spring chỉ biết tới [proxy](repository-proxy.md), còn Simple nằm bên trong proxy làm target.

## Liên kết
- **Nền:** [Repository](repository.md)
- **Sâu hơn:** [Repository Proxy](repository-proxy.md)
- **Cấu trúc:** [Repository Hierarchy](../architecture/repository-hierarchy.md)
