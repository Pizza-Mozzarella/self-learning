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

- Note mới: folder `NN-ten-note/`, số tiếp theo, đặt đúng tầng (folder concept tổng quan gốc ở gốc chủ đề, folder concept con ở `layers/` trong folder concept cha); không đổi tên file cũ.
- Trạng thái note nằm ở frontmatter: `status: draft` (chưa kiểm chứng hoặc chưa chốt) hoặc `status: published` (đã kiểm chứng bằng code chạy và đã chốt). Đổi trạng thái thì sửa frontmatter, không chuyển thư mục.
- Folder concept tổng quan gốc đứng ở gốc chủ đề, folder concept con nằm trong `layers/` của concept cha — không xếp tổng quan và đào sâu ngang nhau.
- `layers/` nằm trong folder concept cha và thuộc về concept đó (hiện: `layers/` của note 01 chứa note 02/03; `layers/` của note 02 sẽ chứa concept nào là layer của 02). Concept con không nằm ở `layers/` của chủ đề mà nằm ở `layers/` của concept cha nó.
