---
title: "Tầng Repository (Spring Data JPA)"
summary: "Repository chỉ là interface, không có code — Spring Data tự sinh implementation lúc chạy."
domain: jpa-hibernate
status: draft
created: 2026-10-26
updated: 2026-10-28
---

# Tầng Repository (Spring Data JPA)

## Tóm gọn của user

Bản vẽ gốc user tự vẽ (bản cuối — thay bản Factory/Proxy/Bean trước đó) đặt ở [phần Cấu trúc](02-tang-repository/structure.md).
Phần lời đã sắp lại theo logic đúng (đích inject là Service, target nằm trong proxy,
factory tạo cả 3 thứ).

Quy trình user tổng kết:

0. Khởi động: Application.Run tạo ApplicationContext → JpaRepositoriesRegistrar quét
   package, ghi bean definition vào BeanDefinitionRegistry → context tạo
   JpaRepositoryFactoryBean.
1. FactoryBean new JpaRepositoryFactory; Factory tạo proxy + new SimpleJpaRepository +
   tạo query executor cho mỗi method tự khai báo.
2. Factory đưa proxy cho Spring container quản lý — giờ gọi là bean (proxy chính là
   bean; Simple và query executor nằm bên trong proxy, không phải bean riêng).
3. Spring inject bean (proxy) vào Service là chỗ khai báo cần Repository — bean này
   chính là Repository, không phải inject vào Repository.
4. Bean hoạt động bằng cách điều hướng: method chuẩn → SimpleJpaRepository, method
   query → query executor.

Sơ đồ đi tiếp xuống tầng EntityManager (Proxy EntityManager → Transaction →
EntityManager → Persistence Context → CONNECTION → Hikari → Database) — chi tiết ở
note 03.

## Câu chốt

Repository chỉ là interface, không có code. Spring Data tự sinh implementation
(SimpleJpaRepository) lúc chạy — bạn khai báo CẦN GÌ, framework lo LÀM NHƯ THẾ NÀO.

## Vì sao cần tầng này

Không có Repository thì mỗi chỗ cần dữ liệu phải tự viết SQL và tự ráp row thành object —
lặp lại và dễ sai. Repository gom mọi truy vấn của một entity vào một chỗ, gọi bằng tên
method thay vì viết SQL.

## Cơ chế

- [Cấu trúc](02-tang-repository/structure.md) — gồm những gì, quan hệ gì.
- [Flow](02-tang-repository/flow.md) — chạy ra sao theo thời gian, ai gọi ai.
- [Class phụ thuộc](02-tang-repository/classes.md) — các class/interface chính và quan hệ phụ thuộc.

## Ví dụ từ project study: OrderRepository

- Kế thừa từ JpaRepository: save, findById, findAll, ...
- Kế thừa từ JpaSpecificationExecutor: findAll(Spec), findOne(Spec), ...
- Tự khai báo: findWithDetailsById (@EntityGraph) — lấy đơn kèm đồ thị.

## Bẫy

- Tưởng Repository có code để đọc — không có, code thật nằm ở SimpleJpaRepository.
- JpaRepository 4.x không kèm Specification — cần Specification thì extends thêm
  JpaSpecificationExecutor.
