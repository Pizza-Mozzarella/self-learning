# Cấu trúc — Tầng EntityManager

## Navigation guide

Đọc bản đồ tổng thể dưới đây trước để biết tầng này gồm những gì và quan hệ gì.
Sau đó đi [Flow](flow.md) để xem entity chuyển trạng thái ra sao theo thời gian và thay
đổi xuống DB bằng cơ chế nào, hoặc [Thành phần và trách nhiệm](classes.md) để xem vai
trò từng thành phần. Khi một bước trong flow nhắc tới thành phần nào thì quay lại sơ đồ
tổng thể này để định vị nó.

## Bản đồ tổng thể

![Bản vẽ tay của user: cấu trúc tổng Spring Data, từ Application.Run tới Database](../../resources/cau-truc-spring-data-tay.png)

Cấu trúc tầng này (đã chốt theo sơ đồ trên):

- Transaction chứa EntityManager; EntityManager chứa Persistence Context (cha chết con
  chết: Transaction chết thì EntityManager chết theo, EntityManager chết thì Persistence
  Context chết theo).
- Proxy EntityManager (trong container nhưng không phải bean) target tới EntityManager
  thật của transaction hiện tại — target, không phải chứa: EntityManager thật sinh/chết
  theo transaction, proxy chỉ chuyển tiếp.
- EntityManager dùng CONNECTION; Hikari cấp CONNECTION; CONNECTION tới Database.
- Cầu nối từ tầng Repository xuống tầng này: SimpleJpaRepository giữ một EntityManager
  qua constructor.

## Quan hệ CHỨA (◆) và quan hệ khác

- CHỨA (◆): Transaction → EntityManager, EntityManager → Persistence Context.
- TARGET (không phải chứa): Proxy EntityManager → EntityManager thật của transaction
  hiện tại.
- GIỮ QUA CONSTRUCTOR (dependency): SimpleJpaRepository → EntityManager.
- DÙNG / CẤP: EntityManager dùng CONNECTION, Hikari cấp CONNECTION, CONNECTION tới
  Database.

[← Về note hub](03-tang-entitymanager.md) | [← Về flow](flow.md) | [← Về thành phần](classes.md)
