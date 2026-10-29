# Flow — Tầng Repository

Khởi động: Application.Run tạo ApplicationContext → JpaRepositoriesRegistrar quét package
repository, ghi bean definition vào BeanDefinitionRegistry → context tạo
JpaRepositoryFactoryBean → FactoryBean new JpaRepositoryFactory → Factory tạo proxy +
Simple + query executor → context đăng ký proxy làm bean → inject vào Service.

Proxy là cái ngã tư: mỗi method gọi tới sẽ rẽ một hướng khác nhau — method chuẩn rẽ sang
SimpleJpaRepository, method query rẽ sang bộ chạy query (suy từ tên method + annotation),
method custom rẽ sang class custom bạn tự viết (nếu có). Bản thân proxy không chứa code
làm việc thật nào.

### Sơ đồ khởi động

```mermaid
sequenceDiagram
    participant Run as Application.Run
    participant Context as ApplicationContext
    participant Registrar as JpaRepositoriesRegistrar
    participant Registry as BeanDefinitionRegistry
    participant FactoryBean as JpaRepositoryFactoryBean
    participant Factory as JpaRepositoryFactory
    participant Proxy as Proxy (bean)
    participant Service
    Run->>Context: tạo ApplicationContext
    Context->>Registrar: quét package repository
    Registrar->>Registry: ghi bean definition
    Context->>FactoryBean: tạo
    FactoryBean->>Factory: new
    Factory->>Proxy: tạo proxy + new Simple + tạo executor
    Context->>Proxy: đăng ký làm bean
    Context->>Service: inject proxy
```

### Sơ đồ điều hướng lúc chạy

```mermaid
flowchart TD
    Call["Gọi method trên proxy"] --> Q{"Loại method?"}
    Q -->|chuẩn| Simple["SimpleJpaRepository"]
    Q -->|query| Executor["Query executor"]
    Q -->|custom| Custom["Class custom"]
```

### Quy trình tổng (user tổng kết)

factory → tạo proxy + new SimpleJpaRepository → đưa proxy cho Spring container quản lý
(giờ gọi là bean) → Spring inject bean vào nơi cần → bean hoạt động bằng cách điều hướng
đến các target mà factory tạo ở trong (SimpleJpaRepository cho method chuẩn, bộ chạy query
cho method query).

[← Về note hub](02-tang-repository.md) | [← Về structure](structure.md)
