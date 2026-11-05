# Nguyên tắc thiết kế

Ghi lại **quy chuẩn và lý do** của repo để việc quản lý về sau không bị lệch. Cách dùng: xem [HUONG-DAN.md](HUONG-DAN.md). File này nói *vì sao*.

## 1. Mục tiêu
- Ghi chú tự học Java/Spring/backend. Giá trị chính nằm ở **cấu trúc** (cây thư mục, quan hệ giữa các ý), ở các note `flow` và `architecture`. Chi tiết nhỏ ít khi được đọc lại: nhớ cấu trúc, còn chi tiết thì học lại hoặc hỏi.
- Ưu tiên chất lượng nội dung. Chi phí vận hành phải thấp: việc cơ học giao cho script.

## 2. Cấu trúc thư mục
- `notes/<lĩnh vực>/…/<chủ đề>/<loại>/<slug>.md`, loại là `concepts` (là gì), `architecture` (gồm gì, tĩnh), `flow` (chạy thế nào, động). Lý do: cây thư mục là thứ dễ nhớ nhất, và ba câu hỏi đó khác nhau.
- **Note tổng hợp (`architecture`, `flow`) nằm ở thư mục cha chung gần nhất của mọi thứ nó nhắc tới.** Lý do: cha phải bao được các con. Vì thế có lớp `backend/` (gom `spring`, `jpa`, `database`) cho các note xuyên chủ đề, còn `java/core` đứng riêng vì chúng không nhắc tới Java core.
- Cha con trong thư mục nghĩa là "thuộc họ nào", không phải "dựng trên cái nào". Quan hệ dựng trên nhau nằm ở link **Nền**.
- Cần thêm cấp để biểu diễn cha con thì thêm. Link tương đối được `check` canh nên độ sâu không phải nỗi lo.
- Thư mục chỉ được tạo khi có note đầu tiên. Lý do: khung rỗng từng làm repo cũ khó dùng.

## 3. Note nguyên tử
- Một note một khẳng định; "Một câu" nói trọn một ý, tổng quát nhất mà luật còn đúng. Ví dụ riêng để ở mục Ví dụ.
- Khẳng định riêng là note riêng. Không có mục "Ghi chú nhanh": nó là chỗ giấu các ý riêng.
- **Thuật ngữ nguyên tử** (Managed, Dirty checking...) đi vào `glossary.md` của chủ đề: mục `### Tên` kèm một dòng giải thích, mặc định `*(draft)*`. Lý do: giải thích một thuật ngữ rẻ hơn tạo một note, câu chốt không phải dựa vào thuật ngữ chưa giải thích, và thuật ngữ không vào sơ đồ nên sơ đồ gọn.
- Câu chốt là lời của người học. Chưa chốt thì `draft`; note chưa học là `stub` (không có "Một câu", chỉ có "Câu hỏi"), và chỉ tạo cho hàng xóm một bước của note đã học. Khái niệm chỉ cần một dòng giải thích là thuật ngữ trong glossary, không tạo stub; stub dành cho khái niệm đủ lớn để có nhiều khẳng định riêng.
- Tên file, thư mục, tiêu đề, tag dùng thuật ngữ tiếng Anh chuẩn; giải thích viết tiếng Việt.

## 4. Liên kết và sơ đồ
- Ba nhóm link: **Nền** (cần biết trước, không vẽ), **Sâu hơn** (cha → con, vẽ mũi tên), **Bên cạnh** (ngang cấp, nét đứt). Lý do: sơ đồ để thấy **cấu trúc**; khi từng vẽ cả thứ tự học thì người đọc hiểu mũi tên thành "dẫn tới".
- Sơ đồ trong README sinh tự động từ link, không vẽ tay và không bịa quan hệ. Nhãn link ngoài ba nhóm bị bỏ qua nên không dùng.
- Nền hoặc Sâu hơn tạo vòng mâu thuẫn là lỗi. Ví dụ đã bắt được: Spring Data JPA ghi `Repository` là cha trực tiếp của cả `SimpleJpaRepository`, `Repository Proxy`, `Query Executor`, trong khi cấu trúc thật là Proxy chứa hai thứ kia làm target.
- Sơ đồ bên trong note `architecture`/`flow` (sequence, class...) do người viết, vì chúng là nội dung học.

## 5. Công cụ
- Việc cơ học dùng script: `new`, `term`, `ok`, `ship`, `map`, `index`, `check`. `check` là cổng: 0 lỗi mới commit.
- `INDEX.md` và khối sơ đồ giữa `<!-- map:start -->` và `<!-- map:end -->` bị ghi đè, không sửa tay.
- Chỉ thêm công cụ khi một việc lặp lại thường xuyên tốn hơn chi phí dựng nó.

## 6. Git
- Làm trên nhánh đang đứng. Gộp bằng Pull Request khi cần xem lại. Không force-push. Bảo vệ nhánh `main` là cài đặt trên GitHub do người sở hữu repo tự bật.

## 7. Dấu hiệu lệch quy chuẩn
- Sơ đồ hub vẽ tay, hoặc có mũi tên thứ tự học.
- Note tổng hợp đặt sai cha (rộng hơn thư mục chứa nó).
- "Một câu" chứa `;`, quá dài, hoặc liệt kê nhiều khẳng định. Ngoại lệ: câu của note tổng hợp nối nhiều phần được dài hơn, và câu do chính người học tổng kết thì giữ nguyên.
- Mục "Ghi chú nhanh" xuất hiện lại; thuật ngữ nguyên tử nằm thành note riêng.
- Câu chốt hoặc thuật ngữ được đánh dấu đã chốt khi người học chưa nói lại.
