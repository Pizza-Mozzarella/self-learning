# Backend

Spring, JPA và database. Các bức tranh xuyên nhiều chủ đề nằm ngay ở đây.

```mermaid
flowchart TD
    A["architecture/<br/>cấu trúc xuyên chủ đề"]
    F["flow/<br/>luồng xuyên chủ đề"]
    SP["spring/"] --> JPA["jpa/"] --> DB["database/"]
    A -.-> SP
    A -.-> JPA
    F -.-> SP
    F -.-> JPA
    F -.-> DB
```

- Cấu trúc: [architecture](architecture/README.md)
- Luồng: [flow](flow/README.md)
- Spring: [flow xuyên Spring](spring/flow/README.md) · [Spring Data JPA](spring/data/jpa/concepts/README.md)
- JPA: [concepts](jpa/concepts/README.md) · [architecture](jpa/architecture/README.md) · [flow](jpa/flow/README.md)
- Database: [concepts](database/concepts/README.md)
