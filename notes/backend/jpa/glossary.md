# JPA: thuật ngữ

Mỗi mục là một thuật ngữ với một dòng giải thích. Note link tới đây bằng `glossary.md#tên-thuật-ngữ`.

### Entity
Object được ánh xạ tới một bảng; mỗi object lưu xuống thành một row. *(draft)*

### Persistence Context
Bộ nhớ đệm các entity đang Managed, do EntityManager giữ. *(draft)*

### Transient
Entity vừa `new`, chưa vào Persistence Context. *(draft)*

### Managed
Entity đang nằm trong Persistence Context nên được theo dõi. *(draft)*

### Detached
Entity từng ở trong Persistence Context nhưng đã bị đẩy ra (thường khi hết transaction): object còn dữ liệu trong RAM nhưng không còn được theo dõi. *(draft)*

### Removed
Entity được đánh dấu hủy, chờ flush để xóa row. *(draft)*

### Persist
Đưa một entity mới (Transient) vào Persistence Context để thành Managed. *(draft)*

### Merge
Sao chép trạng thái của một entity Detached lên một bản Managed, rồi trả về bản Managed đó. *(draft)*

### Dirty checking
Lúc flush, so từng entity Managed với bản chụp lúc nạp; entity nào khác bản chụp (dirty) thì sinh UPDATE. *(draft)*

### Flush
Đẩy các thay đổi trong Persistence Context thành SQL gửi xuống DB; chạy trước commit. *(draft)*

### Commit
Chốt transaction để các thay đổi đã gửi xuống thành bền: lần chốt bền đầu tiên và duy nhất, tách khỏi flush để có điểm quyết định. *(draft)*

### Rollback
Hủy SQL đã flush và dọn Persistence Context, đưa entity Managed hoặc Removed về Detached, không bao giờ về Transient (Transient chưa vào Persistence Context nên không có gì để rollback). *(draft)*

### Transaction
Phạm vi mà EntityManager và Persistence Context sống trong đó; kết thúc bằng commit hoặc rollback. *(draft)*

### Session
EntityManager thật của Hibernate nằm bên dưới proxy (`Session extends EntityManager`), sinh và chết theo transaction. *(draft)*

### Shared proxy
Proxy EntityManager nằm trong container nhưng không phải bean, chuyển tiếp tới Session của transaction hiện tại. *(draft)*

### HikariCP
Pool cấp connection: mỗi transaction mượn một connection rồi trả lại pool. *(draft)*

### PrePersist
Callback (`@PrePersist`) chạy ở tầng Hibernate, sau persist và trước INSERT, nên giá trị như `createdAt` đã có trước khi vào câu INSERT. *(draft)*

### IDENTITY
Kiểu sinh id do DB tự tăng; INSERT chạy ngay lúc persist để lấy id, không đợi flush hay commit. *(draft)*
