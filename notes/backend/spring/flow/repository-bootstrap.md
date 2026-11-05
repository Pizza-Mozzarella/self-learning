---
title: Repository Bootstrap
tags: [spring-data, jpa, startup]
status: draft
verified: no
---
**Một câu:** Factory tạo proxy cùng SimpleJpaRepository, proxy được đưa cho Spring container quản lý thành bean, Spring inject bean vào nơi cần, bean hoạt động bằng cách điều hướng tới các target mà factory tạo bên trong.

## Sơ đồ khởi động

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

## Liên kết
- **Nền:** [Repository Proxy](../data/jpa/concepts/repository-proxy.md)
- **Sâu hơn:** [Repository Dispatch](../data/jpa/flow/repository-dispatch.md)
- **Bên cạnh:** [Repository to Database](../../architecture/repository-to-database.md)
