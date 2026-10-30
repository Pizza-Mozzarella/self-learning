---
title: "Tầng EntityManager (JPA)"
summary: "EntityManager là object trung tâm của JPA để quản lý entity."
domain: jpa-hibernate
status: draft
created: 2026-10-27
updated: 2026-10-30
---

# Tầng EntityManager (JPA)

## Purpose

Code cần một "người quản lý" đứng giữa mình và database: thay vì tự viết SQL cho mọi
thao tác, code nói với EntityManager, nó lo theo dõi entity nào thay đổi rồi flush
xuống DB. JPA chuẩn hóa người quản lý này thành một API chung.

## Core idea

EntityManager là object trung tâm của JPA để quản lý entity: persist (lưu mới), find
(tìm theo id), merge, remove, query — và giữ Persistence Context (bộ nhớ đệm các entity
đang Managed).

## Mental model

Thứ bạn cầm không phải EntityManager thật mà là shared proxy: mỗi transaction có Session
thật riêng bên dưới, proxy chuyển tiếp đúng Session của transaction hiện tại. Session thật
đó giữ Persistence Context — bộ nhớ đệm các entity đang Managed.

## Structure map

Chuỗi chứa: Transaction chứa EntityManager, EntityManager chứa Persistence Context (cha
chết con chết). EntityManager bạn cầm là shared proxy (trong container nhưng không phải
bean), target tới EntityManager thật của transaction hiện tại; EntityManager dùng
CONNECTION do Hikari cấp, CONNECTION tới Database. Bản đồ đầy đủ + bản vẽ tay ở
[Cấu trúc](structure.md).

## Deep dives

**Vòng đời:** vòng đời là quan hệ của entity với Persistence Context — 4 trạng thái
Transient/Managed/Detached/Removed; vào Managed có 3 đường (persist, load, merge); hết
transaction → Detached, remove → Removed; rollback đưa về Detached, không bao giờ về
Transient. Sơ đồ trạng thái đầy đủ ở [Flow](flow.md).

**Thay đổi xuống DB:** chỉ xuống khi có cơ chế mang nó đi — Managed thì dirty checking
lo (không cần save), Detached thì chỉ có save (merge) mới mang được; flush chạy trước,
commit sau. Sơ đồ cơ chế ở [Flow](flow.md).

**Cascade:** danh sách thao tác được phép lan từ thằng mang cascade sang thằng được tham
chiếu; chỉ đặt ở quan hệ cha–con thật; orphanRemoval không phải CascadeType (kích hoạt
khi con bị gỡ khỏi collection). Luồng lan ở [Flow](flow.md).

**Thành phần và trách nhiệm** (EntityManager, Persistence Context, proxy, Session,
Transaction, SimpleJpaRepository, HikariCP) ở [Thành phần](classes.md).

Còn thiếu (chưa chốt hoặc chưa kiểm chứng): khung 4 việc của EntityManager, merge vs
persist chi tiết, find vs getReference, Persistence Context lưu trữ chi tiết, bài chạy
thật (dự đoán đã xác nhận, chưa chạy). Các phần trên sẽ điền khi chốt.

## Ví dụ từ project study

SimpleJpaRepository(Order) giữ EntityManager; khi gọi save(order) → persist → entity
thành Managed trong Persistence Context.

## Key takeaways

- Tưởng EntityManager là connection tới DB — không phải, nó là API quản lý entity, nó
  DÙNG connection (qua Hibernate + JDBC) chứ không phải connection.
- Tưởng EntityManager dùng chung được giữa các thread — không, nó không thread-safe;
  trong Spring, shared proxy lo chuyển tiếp đúng Session theo transaction.
