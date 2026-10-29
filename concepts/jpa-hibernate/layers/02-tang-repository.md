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

Bản đồ tổng thể đầy đủ nằm ở [Cấu trúc](02-tang-repository/structure.md) (cây kế thừa
Spring Data JPA 4.1.1 và bản vẽ tay từ Application.Run tới Database). Bản thu gọn:

Gồm 3 tầng tạo ra nhau lúc startup: JpaRepositoryFactoryBean tạo JpaRepositoryFactory,
Factory tạo proxy + SimpleJpaRepository + query executor. Lúc chạy chỉ có proxy là bean:
nó chứa Simple và executor làm target, Spring inject nó vào Service, Simple giữ
EntityManager nối xuống tầng EntityManager.

## Deep dives

**Flow (thu gọn):** khởi động đi Application.Run → Registrar quét package, ghi bean
definition → context tạo FactoryBean → Factory tạo proxy + Simple + executor → proxy
thành bean → inject vào Service. Lúc chạy, method chuẩn rẽ sang Simple, method query rẽ
sang executor, method custom rẽ sang class custom.
[Chi tiết đầy đủ](02-tang-repository/flow.md).

**Thành phần (thu gọn):** FactoryBean new Factory và chứa nó; Factory tạo proxy (JDK
dynamic proxy), new Simple, tạo executor; proxy điều hướng, không có code làm việc;
Simple làm việc thật cho method chuẩn, giữ EM qua constructor, không phải bean; executor
phân tích tên method thành query lúc startup, runtime chỉ chạy; Proxy EntityManager
target tới EM thật của transaction hiện tại.
[Chi tiết đầy đủ](02-tang-repository/classes.md).

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
