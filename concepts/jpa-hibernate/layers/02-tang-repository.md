---
title: "Tầng Repository (Spring Data JPA)"
summary: "Repository chỉ là interface, không có code — Spring Data tự sinh implementation lúc chạy."
domain: jpa-hibernate
status: draft
created: 2026-10-26
updated: 2026-10-29
---

# Tầng Repository (Spring Data JPA)

## Purpose

Không có Repository thì mỗi chỗ cần dữ liệu phải tự viết SQL và tự ráp row thành object —
lặp lại và dễ sai. Repository gom mọi truy vấn của một entity vào một chỗ, gọi bằng tên
method thay vì viết SQL.

## Core idea

Repository chỉ là interface, không có code. Spring Data tự sinh implementation
(SimpleJpaRepository) lúc chạy — bạn khai báo CẦN GÌ, framework lo LÀM NHƯ THẾ NÀO.

## Mental model

Repository là cái ngã tư: method chuẩn rẽ sang SimpleJpaRepository, method query rẽ sang
bộ chạy query, method custom rẽ sang class custom bạn tự viết (nếu có). Bản thân proxy
không chứa code làm việc thật nào — bean mà Spring inject chính là proxy này.

## Structure map

Bản đồ tổng thể nằm ở [Cấu trúc](02-tang-repository/structure.md): cây kế thừa Spring Data
JPA 4.1.1 (từ Repository tới SimpleJpaRepository), quan hệ proxy/Simple/query executor, và
bản vẽ tay tổng thể từ Application.Run tới Database. Đọc structure trước để biết các
thành phần là gì và nằm ở đâu, rồi mới đi vào luồng chạy và vai trò từng thành phần.

## Deep dives

- [Flow](02-tang-repository/flow.md) — chạy ra sao theo thời gian: khởi động
  (registrar → FactoryBean → Factory → proxy) và điều hướng lúc runtime.
- [Class phụ thuộc](02-tang-repository/classes.md) — vai trò và quan hệ của từng thành
  phần: FactoryBean, Factory, Proxy, Simple, query executor, Proxy EntityManager.

Sơ đồ đi tiếp xuống tầng EntityManager (Proxy EntityManager → Transaction →
EntityManager → Persistence Context → CONNECTION → Hikari → Database) — chi tiết ở
[note 03](03-tang-entitymanager.md).

## Ví dụ từ project study: OrderRepository

- Kế thừa từ JpaRepository: save, findById, findAll, ...
- Kế thừa từ JpaSpecificationExecutor: findAll(Spec), findOne(Spec), ...
- Tự khai báo: findWithDetailsById (@EntityGraph) — lấy đơn kèm đồ thị.

## Key takeaways

- Tưởng Repository có code để đọc — không có, code thật nằm ở SimpleJpaRepository.
- JpaRepository 4.x không kèm Specification — cần Specification thì extends thêm
  JpaSpecificationExecutor.
