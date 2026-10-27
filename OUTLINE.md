# OUTLINE: Danh Mục Tài Liệu

Mục lục điều hướng toàn bộ note. Mỗi chủ đề có README riêng liệt kê các ô trống (note dự kiến) — file note thực tế đánh số theo thứ tự được viết, thứ tự đọc xem tại đây.

Trạng thái note nằm ở frontmatter của từng file: `status: draft` (chưa kiểm chứng hoặc chưa chốt) hoặc `status: published` (đã kiểm chứng bằng code chạy và đã chốt). Đổi trạng thái thì sửa frontmatter, không chuyển thư mục.

---

## Chủ đề (cây concepts/ duy nhất)

- [Java Core](concepts/java-core/README.md) — OOP, Collections, Generics, Streams, Concurrency, JVM.
- [Spring Core](concepts/spring-core/README.md) — IoC, DI, Bean lifecycle, AOP, Proxy.
- [Spring Boot](concepts/spring-boot/README.md) — MVC, Validation, Exception handling, Config/Profiles, Logging.
- [JPA & Hibernate](concepts/jpa-hibernate/README.md) — Mapping, LAZY, N+1, EntityGraph, Cascade, Specification, Persistence Context.
- [Spring Security](concepts/spring-security/README.md) — Hash mật khẩu, JWT, OAuth2.
- [Database](concepts/database/README.md) — SQL, ER, mô hình quan hệ, đại số quan hệ, Index, Transaction, dạng chuẩn.
- [Testing](concepts/testing/README.md) — JUnit, Mockito, MockMvc, Integration test.
- [HTTP & REST](concepts/http-rest/README.md) — HTTP, thiết kế REST, status code, phân trang, list vs detail.
- [Git](concepts/git/README.md) — Workflow nhóm, Conventional Commits, branching.
- [Spring Advanced](concepts/spring-advanced/README.md) — Redis, Upload, @Scheduled/@Async, Swagger/OpenAPI.
- [DevOps](concepts/devops/README.md) — Docker, deploy, CI/CD.
- [Frontend](concepts/frontend/README.md) — HTML/CSS/JS, React, gọi API từ frontend.
- [System Design](concepts/system-design/README.md) — Thiết kế hệ thống cơ bản.

---

## Note đã viết (thứ tự đọc theo tầng)

### JPA & Hibernate

1. [Entity object thành row trên bảng (theo tầng)](concepts/jpa-hibernate/01-entity-object-thanh-row.md) — draft.
2. [Tầng Repository (Spring Data JPA)](concepts/jpa-hibernate/02-tang-repository.md) — draft.
3. [Tầng EntityManager (JPA)](concepts/jpa-hibernate/03-tang-entitymanager.md) — draft, đang viết dở.

---

## Quy tắc đánh số (để khỏi refactor sau này)

- Số thứ tự file = **thứ tự note được viết thực tế**, không phải thứ tự bắt buộc phải đọc.
- Muốn đổi thứ tự đọc thì sửa `OUTLINE.md`, **không đổi tên file cũ** — đổi tên là vỡ mọi link đã dẫn tới nó.
- Chủ đề mới xuất hiện thì thêm một thư mục dưới `concepts/` kèm README mô tả phạm vi.

---

[← Quay lại README](README.md)
