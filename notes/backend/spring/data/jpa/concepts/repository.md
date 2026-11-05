---
title: Repository
tags: [spring-data, jpa]
status: draft
verified: no
---
**Một câu:** Repository chỉ là interface, không có code; Spring Data tự sinh implementation lúc chạy — ta khai báo CẦN GÌ, framework lo LÀM NHƯ THẾ NÀO.

## Giải thích
Không có Repository thì mỗi chỗ cần dữ liệu phải tự viết SQL và tự ráp row thành object, vừa lặp vừa dễ sai. Repository gom truy vấn của một entity vào một chỗ, gọi bằng tên method thay vì viết SQL. Tưởng Repository có code để đọc: không có, code thật nằm ở [SimpleJpaRepository](simple-jpa-repository.md).

## Ví dụ
`OrderRepository` trong project `study`: kế thừa save/findById/findAll từ `JpaRepository`, kế thừa findAll(Spec) từ `JpaSpecificationExecutor`, tự khai báo `findWithDetailsById` (`@EntityGraph`).

## Liên kết
- **Sâu hơn:** [SimpleJpaRepository](simple-jpa-repository.md) · [Repository Proxy](repository-proxy.md) · [Query Executor](query-executor.md)
- **Bên cạnh:** [JpaSpecificationExecutor](jpa-specification-executor.md)
- **Cấu trúc:** [Repository Hierarchy](../architecture/repository-hierarchy.md) · **Flow:** [Repository Bootstrap](../../../flow/repository-bootstrap.md)
