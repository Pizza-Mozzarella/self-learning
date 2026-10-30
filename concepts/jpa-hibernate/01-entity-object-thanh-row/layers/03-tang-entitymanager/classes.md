# Thành phần và trách nhiệm — Tầng EntityManager

Đơn vị ở đây tùy bản chất concept (class/interface/component/process), không chỉ class.
Liệt kê vai trò và quan hệ, không vẽ lại sơ đồ đã có ở [Cấu trúc](structure.md).

- **EntityManager** — object trung tâm của JPA để quản lý entity: persist (lưu mới),
  find (tìm theo id), merge, remove, query; giữ Persistence Context. CHỨA Persistence
  Context (◆). DÙNG connection (qua Hibernate + JDBC), không phải connection.
- **Persistence Context** — bộ nhớ đệm các entity đang Managed, do EntityManager giữ.
  Entity nào nó giữ thì thành Managed; thay đổi trên Managed được dirty checking phát
  hiện và flush xuống DB.
- **Proxy EntityManager** — thứ code cầm trong Spring: trong container nhưng không phải
  bean; TARGET tới EntityManager thật của transaction hiện tại (mỗi transaction có
  Session thật riêng bên dưới, proxy chuyển tiếp đúng Session đó). Nhờ proxy mà
  EntityManager không thread-safe vẫn dùng được giữa các thread: mỗi thread đi đúng
  Session của transaction của nó.
- **Session (Hibernate)** — EntityManager thật bên dưới proxy: Session chính là
  EntityManager (Session extends EntityManager), sinh/chết theo transaction.
- **Transaction** — bao quanh EntityManager: CHỨA EntityManager (◆). Commit làm bền,
  rollback hủy SQL đã flush + dọn PC (đưa Managed/Removed về Detached).
- **SimpleJpaRepository** — cầu nối từ tầng Repository xuống tầng này: GIỮ EntityManager
  qua constructor (dependency, không phải chứa theo nghĩa ◆). Method chuẩn của repository
  đi qua nó xuống EntityManager.
- **HikariCP** — pool cấp CONNECTION: mỗi transaction mượn 1 CONNECTION, xong trả lại
  pool. CONNECTION là ống tới Database, là tài nguyên hiếm nên transaction không giữ
  hoài (đó là một lý do Session đóng theo transaction).

[← Về note hub](03-tang-entitymanager.md) | [← Về structure](structure.md) | [← Về flow](flow.md)
