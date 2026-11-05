---
title: JpaSpecificationExecutor
tags: [spring-data, jpa]
status: draft
verified: no
---
**Một câu:** JpaRepository 4.x không kèm [Specification](../glossary.md#specification), muốn lọc động phải extends thêm JpaSpecificationExecutor.

## Ví dụ
`OrderRepository extends JpaRepository<Order, Long>, JpaSpecificationExecutor<Order>`.

## Liên kết
- **Nền:** [Repository](repository.md)
- **Bên cạnh:** [Repository Hierarchy](../architecture/repository-hierarchy.md)
