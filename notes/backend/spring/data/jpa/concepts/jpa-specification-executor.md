---
title: JpaSpecificationExecutor
tags: [spring-data, jpa]
status: draft
verified: no
---
**Một câu:** JpaRepository 4.x không kèm Specification; muốn lọc động thì phải extends thêm JpaSpecificationExecutor.

## Giải thích
`JpaSpecificationExecutor` đứng riêng ngoài cây `JpaRepository`. `JpaRepositoryImplementation` mới gom cả hai, và `SimpleJpaRepository` implements interface đó.

## Ví dụ
`OrderRepository extends JpaRepository<Order, Long>, JpaSpecificationExecutor<Order>`.

## Liên kết
- **Nền:** [Repository](repository.md)
- **Cấu trúc:** [Repository Hierarchy](../architecture/repository-hierarchy.md)
