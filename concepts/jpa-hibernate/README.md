# JPA & Hibernate

Phạm vi: JPA là đặc tả, Hibernate là thư viện thực thi — mapping, fetch, transaction ở tầng persistence.

## Ô trống (note dự kiến — viết theo thứ tự học thực tế, không bắt buộc theo list)

- LAZY và Proxy: giấy hẹn đi lấy sau
- N+1 và @EntityGraph (đã kiểm chứng: GET đơn từ 7 câu về 1 câu)
- Cascade và orphanRemoval: chỉ ở quan hệ cha–con duy nhất
- Specification lọc động (Bài 2)
- Persistence Context, Flush và Dirty Checking
- @BatchSize và JOIN FETCH: so sánh với @EntityGraph

## Quy tắc

- Note mới: file `NN-ten-note.md`, số tiếp theo, đặt đúng tầng (tổng quan ở gốc, đào sâu từng tầng dưới `layers/`, nhánh mới mở folder riêng); không đổi tên file cũ.
- Trạng thái note nằm ở frontmatter: `status: draft` (chưa kiểm chứng hoặc chưa chốt) hoặc `status: published` (đã kiểm chứng bằng code chạy và đã chốt). Đổi trạng thái thì sửa frontmatter, không chuyển thư mục.
- Note tổng quan đứng ở gốc chủ đề, note đào sâu từng tầng gom dưới `layers/` — không xếp tổng quan và đào sâu ngang nhau.
- `layers/` thuộc nhánh các tầng của stack (hiện do note 01 tổng quan hành trình đi qua các tầng), không phải của chung cả chủ đề. Note cha mới thì mở folder nhánh riêng ở gốc chủ đề, không nhét con của cha mới vào `layers/`.
