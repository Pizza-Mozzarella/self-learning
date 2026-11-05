# JPA: thuật ngữ

Mỗi mục là một thuật ngữ với một dòng giải thích. Note link tới đây bằng `glossary.md#tên-thuật-ngữ`.

### Entity
Object được ánh xạ tới một bảng; mỗi object lưu xuống thành một row.

### Persistence Context
Bộ nhớ đệm các entity đang Managed, do EntityManager giữ.

### Transient
Entity vừa `new`, chưa vào Persistence Context.

### Managed
Entity đang nằm trong Persistence Context nên được theo dõi.

### Detached
Entity từng ở trong Persistence Context nhưng đã bị đẩy ra (thường khi hết transaction): object còn dữ liệu trong RAM nhưng không còn được theo dõi.

### Removed
Entity được đánh dấu hủy, chờ flush để xóa row.

### Persist
Đưa một entity mới (Transient) vào Persistence Context để thành Managed.

### Merge
Sao chép trạng thái của một entity Detached lên một bản Managed, rồi trả về bản Managed đó.

### Dirty checking
Lúc flush, so từng entity Managed với bản chụp lúc nạp; entity nào khác bản chụp (dirty) thì sinh UPDATE.

### Flush
Đẩy các thay đổi trong Persistence Context thành SQL gửi xuống DB; chạy trước commit.

### Commit
Chốt transaction để các thay đổi đã gửi xuống thành bền.

### Rollback
Hủy SQL đã flush và dọn Persistence Context, đưa entity Managed hoặc Removed về Detached.

### Transaction
Phạm vi mà EntityManager và Persistence Context sống trong đó; kết thúc bằng commit hoặc rollback.

### Session
EntityManager thật của Hibernate nằm bên dưới proxy (`Session extends EntityManager`), sinh và chết theo transaction.

### Shared proxy
Proxy EntityManager nằm trong container nhưng không phải bean, chuyển tiếp tới Session của transaction hiện tại.

### HikariCP
Pool cấp connection: mỗi transaction mượn một connection rồi trả lại pool.
