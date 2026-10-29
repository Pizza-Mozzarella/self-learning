# Hướng dẫn sử dụng repo

Repo này là kho note tự học — toàn file Markdown + ảnh, đọc trực tiếp trên GitHub là
được, không cần build gì cả. Quy tắc đầy đủ (mẫu note, trạng thái, cách thêm note) xem
ở [README.md](README.md); file này chỉ hướng dẫn cách dùng.

## Đọc ở đâu

- Muốn đọc theo thứ tự → mở [OUTLINE.md](OUTLINE.md).
- Muốn tìm note theo tên → mở [_index/topic-map.md](_index/topic-map.md).
- Muốn biết mới đổi gì → mở [_index/recent-changes.md](_index/recent-changes.md).
- Muốn xem món đang park chờ chốt → mở [log/open-questions.md](log/open-questions.md).

## Cấu trúc 1 concept

Mỗi concept là 1 folder chứa hub + 3 file phần + `layers/` cho concept con; folder concept
nằm trong `layers/` của concept cha; folder concept tổng quan gốc đứng ở gốc chủ đề:

```
concepts/<chủ đề>/
  NN-ten-note/
    NN-ten-note.md              ← hub, mở file này là đủ hiểu concept
    structure.md, flow.md, classes.md  ← đào sâu: bản đồ, luồng, trách nhiệm
    resources/                  ← ảnh của nhánh
    layers/                     ← concept con của concept này
      NN-ten-note-con/
        NN-ten-note-con.md
        structure.md, flow.md, classes.md
        resources/
        layers/
```

- **Hub đọc độc lập được**: mở mỗi file hub là hiểu hết concept, không bắt buộc mở
  folder. Muốn đào sâu mới mở 3 file phần trong cùng folder.
- **Concept con nằm trong `layers/` của concept cha**, cứ thế đệ quy.
- **Ảnh nằm trong `resources/` của nhánh**, không lẫn với file .md.
- **`temporary/` là nơi tập kết**: note mới nằm đây trước để coi, rồi mới dời vào
  `concepts/` khi đã chỉ cách tổ chức. Note chỉ nằm một chỗ tại một thời điểm, không
  nhân đôi.

Ví dụ: nhánh JPA có concept tổng quan `01-entity-object-thanh-row/` ở gốc chủ đề, và 2
concept con `02-tang-repository/`, `03-tang-entitymanager/` nằm trong `layers/` của nó.

## Trạng thái note

Trạng thái nằm ở frontmatter đầu file hub:

- `draft` = chưa kiểm chứng hoặc chưa chốt.
- `published` = đã kiểm chứng bằng code chạy **và** đã chốt (cả 2 điều kiện).

Trạng thái từng note xem ở [OUTLINE.md](OUTLINE.md).

## Mấy quy ước cần nhớ

- Số thứ tự file (`01-`, `02-`, `03-`) là **thứ tự viết thực tế**, không phải thứ tự
  đọc — thứ tự đọc xem OUTLINE.
- **Đừng đổi tên file cũ** — đổi tên là vỡ link khắp repo.
- Sơ đồ trong note là code Mermaid, GitHub tự render; ảnh vẽ tay là PNG trong
  `resources/`.

## Quy trình làm việc với assistant

1. Bạn nói về 1 chủ đề (quá 3 câu liên tục, hoặc tỏ ra quan tâm) → assistant tự mở
   bản nháp, không chờ bạn kêu.
2. Cùng sửa trên bản nháp tới khi xong.
3. Khi bạn giải thích lại đúng bằng lời mình mà chưa chốt, assistant nhắc 1 câu ngắn
   để bạn chốt bằng 1 từ rồi ghi ngay.
4. Note mới push vào `temporary/` để bạn coi trước.
5. Bạn chỉ cách tổ chức → assistant dời vào `concepts/`, sửa link và luật theo.
6. Chỉ khi nội dung đã kiểm chứng + đã chốt thì note mới lên `published`; chưa thì
   giữ draft.

Một lưu ý nhỏ: bạn sửa trực tiếp trên GitHub cũng được, nhưng báo assistant một tiếng
để sửa link và luật theo cho khỏi lệch.
