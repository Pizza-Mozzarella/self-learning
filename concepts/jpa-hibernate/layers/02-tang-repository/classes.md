# Class phụ thuộc — Tầng Repository

Các class/interface chính của tầng Repository và quan hệ phụ thuộc giữa chúng.
Ký hiệu theo quy ước đã chốt: CHỨA (◆, cha chết con chết), TẠO, DEPENDENCY (giữ
reference và gọi method), INJECT (container đưa bean vào chỗ xin), TARGET (proxy
ủy thác cho).

- **OrderRepository** (code user): extends JpaRepository<Order, Long> và
  JpaSpecificationExecutor<Order>. Tự khai báo findWithDetailsById (@EntityGraph).
- **JpaRepository** (Spring Data JPA): gom ListCrudRepository,
  ListPagingAndSortingRepository, QueryByExampleExecutor và method riêng JPA
  (flush, saveAndFlush...).
- **JpaSpecificationExecutor**: đứng RIÊNG ngoài cây JpaRepository — muốn lọc động
  thì extends thêm, JpaRepository 4.1.1 không kèm sẵn.
- **JpaRepositoryImplementation**: extends JpaRepository + JpaSpecificationExecutor;
  SimpleJpaRepository implements interface này.
- **SimpleJpaRepository** (class viết sẵn, không phải code sinh): implements
  JpaRepositoryImplementation; DEPENDENCY tới EntityManager qua constructor
  (Simple giữ EM, EM không biết Simple tồn tại); không phải bean.
- **JpaRepositoryFactoryBean** (bean trong container): new JpaRepositoryFactory và
  CHỨA nó trong field; container gọi getObject() để lấy proxy.
- **JpaRepositoryFactory**: TẠO proxy (qua ProxyFactory → JDK dynamic proxy), new
  SimpleJpaRepository, tạo query executor cho mỗi method tự khai báo.
- **Proxy** (chính là bean Repository): CHỨA Simple và query executor làm target;
  được INJECT vào Service.
- **Query executor** (vd PartTreeJpaQuery cho findWithDetailsById): phân tích tên
  method thành object query chuẩn bị sẵn lúc startup, runtime chỉ chạy.
- **Proxy EntityManager**: TARGET là EntityManager thật gắn với transaction hiện
  tại — chi tiết ở [note 03](../03-tang-entitymanager.md).

[← Về note hub](../02-tang-repository.md) | [← Về structure](structure.md)
