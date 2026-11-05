---
title: Save Entity
tags: [jpa, hibernate, flow]
status: draft
verified: no
---
**Một câu:** Một lệnh lưu đi xuống qua các tầng từ Service tới PostgreSQL rồi quay ngược lại.

```mermaid
sequenceDiagram
    participant Service
    participant Repository
    participant SimpleJpaRepository
    participant EntityManager
    participant Hibernate
    participant JDBC Driver
    participant PostgreSQL
    Service->>Repository: save(order)
    Repository->>SimpleJpaRepository: save(order)
    SimpleJpaRepository->>EntityManager: persist(order)
    EntityManager->>Hibernate: persist(order)
    Note over Hibernate: @PrePersist chạy ở đây: sau persist, trước INSERT
    Hibernate->>JDBC Driver: INSERT INTO Orders ...
    JDBC Driver->>PostgreSQL: gửi SQL qua TCP
    PostgreSQL-->>JDBC Driver: trả id = 1
    JDBC Driver-->>Hibernate: id = 1
    Hibernate-->>EntityManager: gán id vào object
    EntityManager-->>SimpleJpaRepository: trả order (id = 1)
    SimpleJpaRepository-->>Repository: trả order
    Repository-->>Service: trả order
    Note over Service,PostgreSQL: items INSERT tương tự kèm order_id = 1, COMMIT làm các row thành bền
```

## Ví dụ
[`@PrePersist`](../jpa/glossary.md#prepersist) chạy sau persist và trước INSERT nên `createdAt` đã có giá trị trước khi vào câu INSERT. Với id [IDENTITY](../jpa/glossary.md#identity), INSERT chạy ngay lúc persist.

## Liên kết
- **Nền:** [Entity to Row](../jpa/concepts/entity-to-row.md) · [Entity Manager](../jpa/concepts/entity-manager.md)
- **Sâu hơn:** [Flush and Dirty Checking](../jpa/flow/flush-and-dirty-checking.md)
- **Bên cạnh:** [Repository Dispatch](../spring/data/jpa/flow/repository-dispatch.md)
