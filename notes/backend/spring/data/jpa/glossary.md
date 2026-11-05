# Spring Data JPA: thuật ngữ

Mỗi mục là một thuật ngữ với một dòng giải thích. Note link tới đây bằng `glossary.md#tên-thuật-ngữ`.

### Bean
Object do Spring container tạo và quản lý. *(draft)*

### Container
Spring container (ApplicationContext) tạo, nối và quản lý các bean. *(draft)*

### Proxy
Object đứng thay một object khác và chuyển các lời gọi tới nó. *(draft)*

### Target
Thành phần nằm bên trong proxy mà proxy chuyển lời gọi tới; không phải bean riêng. *(draft)*

### FactoryBean
Bean dùng để tạo ra một bean khác; `JpaRepositoryFactoryBean` tạo ra proxy repository. *(draft)*

### JpaRepositoryFactory
Factory do FactoryBean tạo; nó tạo ra proxy, SimpleJpaRepository và query executor. *(draft)*

### Specification
Điều kiện truy vấn dựng bằng code để lọc động. *(draft)*
