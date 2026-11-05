---
title: SimpleJpaRepository
tags: [spring-data, jpa]
status: draft
verified: no
---
**Một câu:** SimpleJpaRepository là class viết sẵn làm việc thật cho các method chuẩn của repository.

## Ghi chú nhanh
- Giữ một `EntityManager` qua constructor.
- Chỉ được `new` bởi `JpaRepositoryFactory`: không phải bean, không được inject.

## Liên kết
- **Nền:** [Repository](repository.md)
- **Bên cạnh:** [Repository Proxy](repository-proxy.md)
- **Cấu trúc:** [Repository Hierarchy](../architecture/repository-hierarchy.md)
