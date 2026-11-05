# Notes

```mermaid
flowchart LR
    JAVA["java/core<br/>ngôn ngữ nền"] --> BE
    subgraph BE["backend"]
        direction LR
        SP["spring<br/>framework, data/jpa"] --> JPA["jpa<br/>EntityManager, Hibernate"] --> DB["database<br/>JDBC, SQL"]
    end
```

- [java/core](java/core/concepts/README.md)
- [backend](backend/README.md)

Trong mỗi chủ đề có ba loại: `concepts` (note nguyên tử, là gì), `architecture` (cấu trúc tĩnh), `flow` (luồng chạy). Note xuyên nhiều chủ đề nằm ở thư mục cha chung của chúng.
