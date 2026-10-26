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

- Note mới: file `NN_ten-note.md`, số tiếp theo; không đổi tên file cũ.
- Chưa kiểm chứng thì viết ở `temporary/jpa-hibernate/` trước, kiểm chứng xong mới chuyển sang đây.
