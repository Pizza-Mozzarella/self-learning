# Index

_Tự sinh bằng `node tools/notes.js index`, đừng sửa tay._

## architecture

- [Entity Manager Containment](notes/jpa/architecture/entity-manager-containment.md) — Transaction chứa EntityManager, EntityManager chứa Persistence Context, cha chết thì con chết theo. *(draft)*
- [Repository to Database](notes/spring/data/jpa/architecture/repository-to-database.md) — FactoryBean tạo Factory, Factory tạo ra proxy cùng SimpleJpaRepository cùng query executor; lúc chạy chỉ có proxy là bean, các thứ còn lại nằm bên trong nó. *(draft)*

## database

- [Data Migration](notes/database/concepts/data-migration.md) — Quản lý mọi thay đổi của database theo thời gian bằng script có version, áp theo đúng thứ tự, thay vì sửa schema tay hay để Hibernate tự đoán (`ddl-auto`). *(draft)*
- [Schema](notes/database/concepts/schema.md) — Schema là cấu trúc của database (bảng nào, cột nào, kiểu gì, ràng buộc gì), là cái khung, còn data là các row đổ vào khung đó. *(draft)*

## entity-manager

- [Entity Manager Containment](notes/jpa/architecture/entity-manager-containment.md) — Transaction chứa EntityManager, EntityManager chứa Persistence Context, cha chết thì con chết theo. *(draft)*
- [Entity Manager](notes/jpa/concepts/entity-manager.md) — EntityManager là object trung tâm của JPA để quản lý entity (persist, find, merge, remove, query). *(draft)*
- [Persistence Context](notes/jpa/concepts/persistence-context.md) — Persistence Context là bộ nhớ đệm các entity đang Managed, do EntityManager giữ. *(draft)*
- [Shared Entity Manager](notes/jpa/concepts/shared-entity-manager.md) — Thứ ta cầm trong Spring không phải EntityManager thật mà là một shared proxy, chuyển tiếp tới Session của transaction hiện tại. *(draft)*
- [Entity Lifecycle](notes/jpa/flow/entity-lifecycle.md) — Vòng đời của entity là quan hệ của nó với Persistence Context, không phải trạng thái của row trong DB. *(draft)*
- [Flush and Dirty Checking](notes/jpa/flow/flush-and-dirty-checking.md) — Thay đổi trên entity chỉ xuống DB khi có cơ chế mang nó đi: Managed thì dirty checking lo, Detached thì chỉ save (merge) mới mang được. *(draft)*

## flow

- [Cascade Propagation](notes/jpa/flow/cascade-propagation.md) — Thao tác nào có trong danh sách cascade thì lan từ cha sang con khi thực hiện trên cha. *(draft)*
- [Entity Lifecycle](notes/jpa/flow/entity-lifecycle.md) — Vòng đời của entity là quan hệ của nó với Persistence Context, không phải trạng thái của row trong DB. *(draft)*
- [Flush and Dirty Checking](notes/jpa/flow/flush-and-dirty-checking.md) — Thay đổi trên entity chỉ xuống DB khi có cơ chế mang nó đi: Managed thì dirty checking lo, Detached thì chỉ save (merge) mới mang được. *(draft)*
- [Save Entity](notes/jpa/flow/save-entity.md) — Một lệnh lưu đi qua các tầng Service → Repository → SimpleJpaRepository → EntityManager → Hibernate → JDBC Driver → PostgreSQL rồi quay ngược lại. *(draft)*

## hibernate

- [Entity to Row](notes/jpa/concepts/entity-to-row.md) — Bảng không bao giờ chứa object: Hibernate tháo object ra thành giá trị phẳng, tham chiếu thành id khóa ngoại, list thành bảng riêng, chỉ field đơn mới thành cột. *(draft)*
- [Save Entity](notes/jpa/flow/save-entity.md) — Một lệnh lưu đi qua các tầng Service → Repository → SimpleJpaRepository → EntityManager → Hibernate → JDBC Driver → PostgreSQL rồi quay ngược lại. *(draft)*

## interface

- [Polymorphism](notes/java/core/concepts/polymorphism.md) — Ta khai báo thứ cần dùng bằng interface, nhưng lúc chạy thứ được đưa vào luôn là một object thật của một class cụ thể. *(draft)*

## java

- [Polymorphism](notes/java/core/concepts/polymorphism.md) — Ta khai báo thứ cần dùng bằng interface, nhưng lúc chạy thứ được đưa vào luôn là một object thật của một class cụ thể. *(draft)*

## jpa

- [Entity Manager Containment](notes/jpa/architecture/entity-manager-containment.md) — Transaction chứa EntityManager, EntityManager chứa Persistence Context, cha chết thì con chết theo. *(draft)*
- [Cascade](notes/jpa/concepts/cascade.md) — Cascade là danh sách thao tác được phép lan từ entity mang annotation sang entity được tham chiếu. *(draft)*
- [Entity Manager](notes/jpa/concepts/entity-manager.md) — EntityManager là object trung tâm của JPA để quản lý entity (persist, find, merge, remove, query). *(draft)*
- [Entity to Row](notes/jpa/concepts/entity-to-row.md) — Bảng không bao giờ chứa object: Hibernate tháo object ra thành giá trị phẳng, tham chiếu thành id khóa ngoại, list thành bảng riêng, chỉ field đơn mới thành cột. *(draft)*
- [Orphan Removal](notes/jpa/concepts/orphan-removal.md) — orphanRemoval không phải CascadeType: nó kích hoạt khi con bị gỡ khỏi collection, còn REMOVE kích hoạt khi remove cha. *(draft)*
- [Persistence Context](notes/jpa/concepts/persistence-context.md) — Persistence Context là bộ nhớ đệm các entity đang Managed, do EntityManager giữ. *(draft)*
- [Shared Entity Manager](notes/jpa/concepts/shared-entity-manager.md) — Thứ ta cầm trong Spring không phải EntityManager thật mà là một shared proxy, chuyển tiếp tới Session của transaction hiện tại. *(draft)*
- [Cascade Propagation](notes/jpa/flow/cascade-propagation.md) — Thao tác nào có trong danh sách cascade thì lan từ cha sang con khi thực hiện trên cha. *(draft)*
- [Entity Lifecycle](notes/jpa/flow/entity-lifecycle.md) — Vòng đời của entity là quan hệ của nó với Persistence Context, không phải trạng thái của row trong DB. *(draft)*
- [Flush and Dirty Checking](notes/jpa/flow/flush-and-dirty-checking.md) — Thay đổi trên entity chỉ xuống DB khi có cơ chế mang nó đi: Managed thì dirty checking lo, Detached thì chỉ save (merge) mới mang được. *(draft)*
- [Save Entity](notes/jpa/flow/save-entity.md) — Một lệnh lưu đi qua các tầng Service → Repository → SimpleJpaRepository → EntityManager → Hibernate → JDBC Driver → PostgreSQL rồi quay ngược lại. *(draft)*
- [Repository Hierarchy](notes/spring/data/jpa/architecture/repository-hierarchy.md) — SimpleJpaRepository nằm ở đáy cây kế thừa của Spring Data JPA, implements JpaRepositoryImplementation (gom JpaRepository với JpaSpecificationExecutor). *(draft)* ✔
- [Repository to Database](notes/spring/data/jpa/architecture/repository-to-database.md) — FactoryBean tạo Factory, Factory tạo ra proxy cùng SimpleJpaRepository cùng query executor; lúc chạy chỉ có proxy là bean, các thứ còn lại nằm bên trong nó. *(draft)*
- [JpaSpecificationExecutor](notes/spring/data/jpa/concepts/jpa-specification-executor.md) — JpaRepository 4.x không kèm Specification; muốn lọc động thì phải extends thêm JpaSpecificationExecutor. *(draft)*
- [Query Executor](notes/spring/data/jpa/concepts/query-executor.md) — Query executor phân tích tên method (và annotation) thành query chuẩn bị sẵn lúc startup, lúc chạy chỉ việc chạy. *(draft)*
- [Repository Proxy](notes/spring/data/jpa/concepts/repository-proxy.md) — Bean Repository mà Spring inject chính là một proxy: nó không chứa code làm việc thật, chỉ điều hướng từng method tới target. *(draft)*
- [Repository](notes/spring/data/jpa/concepts/repository.md) — Repository chỉ là interface, không có code; Spring Data tự sinh implementation lúc chạy — ta khai báo CẦN GÌ, framework lo LÀM NHƯ THẾ NÀO. *(draft)*
- [SimpleJpaRepository](notes/spring/data/jpa/concepts/simple-jpa-repository.md) — SimpleJpaRepository là class viết sẵn làm việc thật cho các method chuẩn của repository. *(draft)*
- [Repository Bootstrap](notes/spring/data/jpa/flow/repository-bootstrap.md) — Factory tạo proxy cùng SimpleJpaRepository, proxy được đưa cho Spring container quản lý thành bean, Spring inject bean vào nơi cần, bean hoạt động bằng cách điều hướng tới các target mà factory tạo bên trong. *(draft)*
- [Repository Dispatch](notes/spring/data/jpa/flow/repository-dispatch.md) — Proxy là cái ngã tư: method chuẩn rẽ sang SimpleJpaRepository, method query rẽ sang query executor, method custom rẽ sang class custom của ta. *(draft)*

## mapping

- [Entity to Row](notes/jpa/concepts/entity-to-row.md) — Bảng không bao giờ chứa object: Hibernate tháo object ra thành giá trị phẳng, tham chiếu thành id khóa ngoại, list thành bảng riêng, chỉ field đơn mới thành cột. *(draft)*

## migration

- [Data Migration](notes/database/concepts/data-migration.md) — Quản lý mọi thay đổi của database theo thời gian bằng script có version, áp theo đúng thứ tự, thay vì sửa schema tay hay để Hibernate tự đoán (`ddl-auto`). *(draft)*

## proxy

- [Shared Entity Manager](notes/jpa/concepts/shared-entity-manager.md) — Thứ ta cầm trong Spring không phải EntityManager thật mà là một shared proxy, chuyển tiếp tới Session của transaction hiện tại. *(draft)*
- [Repository Proxy](notes/spring/data/jpa/concepts/repository-proxy.md) — Bean Repository mà Spring inject chính là một proxy: nó không chứa code làm việc thật, chỉ điều hướng từng method tới target. *(draft)*
- [Repository Dispatch](notes/spring/data/jpa/flow/repository-dispatch.md) — Proxy là cái ngã tư: method chuẩn rẽ sang SimpleJpaRepository, method query rẽ sang query executor, method custom rẽ sang class custom của ta. *(draft)*

## relationship

- [Cascade](notes/jpa/concepts/cascade.md) — Cascade là danh sách thao tác được phép lan từ entity mang annotation sang entity được tham chiếu. *(draft)*
- [Orphan Removal](notes/jpa/concepts/orphan-removal.md) — orphanRemoval không phải CascadeType: nó kích hoạt khi con bị gỡ khỏi collection, còn REMOVE kích hoạt khi remove cha. *(draft)*
- [Cascade Propagation](notes/jpa/flow/cascade-propagation.md) — Thao tác nào có trong danh sách cascade thì lan từ cha sang con khi thực hiện trên cha. *(draft)*

## spring-data

- [Repository Hierarchy](notes/spring/data/jpa/architecture/repository-hierarchy.md) — SimpleJpaRepository nằm ở đáy cây kế thừa của Spring Data JPA, implements JpaRepositoryImplementation (gom JpaRepository với JpaSpecificationExecutor). *(draft)* ✔
- [Repository to Database](notes/spring/data/jpa/architecture/repository-to-database.md) — FactoryBean tạo Factory, Factory tạo ra proxy cùng SimpleJpaRepository cùng query executor; lúc chạy chỉ có proxy là bean, các thứ còn lại nằm bên trong nó. *(draft)*
- [JpaSpecificationExecutor](notes/spring/data/jpa/concepts/jpa-specification-executor.md) — JpaRepository 4.x không kèm Specification; muốn lọc động thì phải extends thêm JpaSpecificationExecutor. *(draft)*
- [Query Executor](notes/spring/data/jpa/concepts/query-executor.md) — Query executor phân tích tên method (và annotation) thành query chuẩn bị sẵn lúc startup, lúc chạy chỉ việc chạy. *(draft)*
- [Repository Proxy](notes/spring/data/jpa/concepts/repository-proxy.md) — Bean Repository mà Spring inject chính là một proxy: nó không chứa code làm việc thật, chỉ điều hướng từng method tới target. *(draft)*
- [Repository](notes/spring/data/jpa/concepts/repository.md) — Repository chỉ là interface, không có code; Spring Data tự sinh implementation lúc chạy — ta khai báo CẦN GÌ, framework lo LÀM NHƯ THẾ NÀO. *(draft)*
- [SimpleJpaRepository](notes/spring/data/jpa/concepts/simple-jpa-repository.md) — SimpleJpaRepository là class viết sẵn làm việc thật cho các method chuẩn của repository. *(draft)*
- [Repository Bootstrap](notes/spring/data/jpa/flow/repository-bootstrap.md) — Factory tạo proxy cùng SimpleJpaRepository, proxy được đưa cho Spring container quản lý thành bean, Spring inject bean vào nơi cần, bean hoạt động bằng cách điều hướng tới các target mà factory tạo bên trong. *(draft)*
- [Repository Dispatch](notes/spring/data/jpa/flow/repository-dispatch.md) — Proxy là cái ngã tư: method chuẩn rẽ sang SimpleJpaRepository, method query rẽ sang query executor, method custom rẽ sang class custom của ta. *(draft)*

## startup

- [Repository Bootstrap](notes/spring/data/jpa/flow/repository-bootstrap.md) — Factory tạo proxy cùng SimpleJpaRepository, proxy được đưa cho Spring container quản lý thành bean, Spring inject bean vào nơi cần, bean hoạt động bằng cách điều hướng tới các target mà factory tạo bên trong. *(draft)*

## Chưa khám phá (stub)

- [Instance](notes/java/core/concepts/instance.md) — Instance (object thật) khác class ở chỗ nào, và ai quyết định tạo nó bằng `new`?
- [Interface](notes/java/core/concepts/interface.md) — Interface trong Java là gì, và nó cho ta biết điều gì về một object mà không nói object đó làm việc thế nào?
- [Connection](notes/jpa/concepts/connection.md) — Connection là gì, ai cấp nó (HikariCP), và vì sao transaction mượn rồi trả lại pool thay vì giữ hoài?
