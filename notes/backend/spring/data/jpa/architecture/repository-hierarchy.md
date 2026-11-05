---
title: Repository Hierarchy
tags: [spring-data, jpa]
status: draft
verified: yes javap, Spring Data JPA 4.1.1
---
**Một câu:** SimpleJpaRepository nằm ở đáy cây kế thừa của Spring Data JPA, implements JpaRepositoryImplementation (gom JpaRepository với JpaSpecificationExecutor).

## Cây kế thừa

```mermaid
classDiagram
    class Repository
    class CrudRepository
    class ListCrudRepository
    class PagingAndSortingRepository
    class ListPagingAndSortingRepository
    class QueryByExampleExecutor
    class JpaRepository
    class JpaSpecificationExecutor
    class JpaRepositoryImplementation
    class SimpleJpaRepository
    Repository <|-- CrudRepository
    CrudRepository <|-- ListCrudRepository
    PagingAndSortingRepository <|-- ListPagingAndSortingRepository
    ListCrudRepository <|-- JpaRepository
    ListPagingAndSortingRepository <|-- JpaRepository
    QueryByExampleExecutor <|-- JpaRepository
    JpaRepository <|-- JpaRepositoryImplementation
    JpaSpecificationExecutor <|-- JpaRepositoryImplementation
    JpaRepositoryImplementation <|.. SimpleJpaRepository
```

## Giải thích
- `JpaRepository` gom `ListCrudRepository`, `ListPagingAndSortingRepository`, `QueryByExampleExecutor` và method riêng của JPA (`flush`, `saveAndFlush`...).
- `JpaRepository` 4.1.1 **không** kèm Specification: xem [JpaSpecificationExecutor](../concepts/jpa-specification-executor.md).
- Ví dụ: `OrderRepository extends JpaRepository<Order, Long>, JpaSpecificationExecutor<Order>`.

## Liên kết
- **Nền:** [Repository](../concepts/repository.md)
- **Sâu hơn:** [SimpleJpaRepository](../concepts/simple-jpa-repository.md) · [Repository to Database](../../../../architecture/repository-to-database.md)
