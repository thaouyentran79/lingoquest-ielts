# 👑 LingoQuest IELTS - Ứng Dụng Học IELTS "Vừa Học Vừa Chill"

Ứng dụng web học tiếng Anh và từ vựng IELTS Band 6.5 - 8.5 thông qua **Âm nhạc US-UK**, **Xu hướng Thời trang Quốc tế** và **Bản tin Công nghệ AI**. 

100% Miễn phí trọn đời, giao diện lộ trình học tập (Roadmap) trực quan, có điểm thưởng XP, chuỗi ngày học liên tiếp (Streak) và hệ thống Mini-games vui nhộn.

---

## 🌟 TÍNH NĂNG NỔI BẬT

1. **Lộ trình học tập sinh động (Roadmap Trail):**
   - Lấy cảm hứng từ Duolingo và Forum Flash Study.
   - Các chặng học xếp theo đường mòn zíc zắc, mở khóa dần khi người học hoàn thành thử thách.
   - 3 mảng chủ đề thời thượng: Âm nhạc US-UK, Thời trang & Phong cách sống, Công nghệ số & Giao thông thông minh.

2. **Nội dung thời thượng & Tương tác cao:**
   - **Âm nhạc US-UK:** Xem video YouTube bản hit (Die With A Smile, Espresso...), lời bài hát tương tác, giải mã thành ngữ (Idioms) và từ lóng cho bài thi IELTS Speaking.
   - **Thời trang & Lifestyle:** Đọc báo phong cách Vogue/Elle, các từ vựng C1-C2 được đánh dấu nổi bật. Chạm vào bất kỳ từ nào để nghe loa phát âm chuẩn US ngay tức thì.
   - **Công nghệ & ITS:** Bài đọc song ngữ format IELTS Reading về Trợ lý AI và Giao thông thông minh.

3. **Hệ thống 3 Trò chơi nhỏ (Mini-games) nhớ từ siêu tốc:**
   - **Flashcard 3D lật thẻ:** Chạm lật thẻ hai mặt, có phiên âm IPA, ảnh minh họa gợi nhớ, nút loa phát âm và mẹo áp dụng vào bài thi IELTS.
   - **Nối từ siêu tốc (Speed Matching):** Thử thách nối cặp từ tiếng Anh và nghĩa tiếng Việt trong 30 giây kịch tính.
   - **Điền từ ngữ cảnh (Gap-fill Challenge):** Thử thách trắc nghiệm trích từ chính bài hát và bản tin, có pháo hoa (Confetti) chúc mừng khi chọn đúng.

4. **100% Không tốn phí, Không cần cài đặt máy chủ:**
   - Dữ liệu và tiến độ học được lưu tự động trên trình duyệt (`LocalStorage`).
   - Âm thanh game tự tạo bằng `Web Audio API` và giọng đọc bằng `Web Speech API` có sẵn trong trình duyệt.

---

## 🚀 HƯỚNG DẪN MỞ & XUẤT BẢN LÊN MẠNG (CHO NGƯỜI KHÔNG RÀNH KỸ THUẬT)

### Cách 1: Mở xem ngay trên máy tính (Chỉ 2 giây)
1. Mở thư mục `ielts-app`.
2. Bấm đúp chuột (Double-click) vào file `index.html`.
3. Trình duyệt (Chrome, Cốc Cốc, Edge) sẽ mở trang web lên ngay lập tức! Bạn có thể học thử, nghe nhạc, lật thẻ và nối từ ngay.

---

### Cách 2: Đưa lên mạng bằng Kéo - Thả qua Netlify Drop (Khuyên dùng - Cực dễ)
Đây là cách đơn giản nhất để có link web gửi cho bạn bè hoặc mở trên điện thoại:
1. Mở trình duyệt và vào trang: **https://app.netlify.com/drop**
2. Nắm chuột vào cả thư mục `ielts-app` trên máy tính, kéo và thả vào khung nét đứt giữa màn hình.
3. Chờ 5 giây, trang web sẽ hiển thị một đường link màu xanh (ví dụ: `https://lingoquest-ielts.netlify.app`).
4. Bấm vào link đó là bạn đã có một trang web chạy trực tiếp trên toàn cầu!

---

### Cách 3: Kích hoạt miễn phí qua GitHub Pages
Vì toàn bộ mã nguồn này đã được đồng bộ lên kho GitHub của bạn:
1. Vào kho GitHub: **https://github.com/thaouyentran79/agent-boss**
2. Bấm vào mục **Settings** (Cài đặt) ở thanh trên cùng.
3. Ở menu bên trái, bấm vào mục **Pages**.
4. Tại ô **Build and deployment > Branch**, chọn nhánh `main` và chọn thư mục `/ (root)`.
5. Bấm **Save** (Lưu). Chờ 1 - 2 phút, GitHub sẽ cấp cho bạn một đường link chính thức dạng:
   `https://thaouyentran79.github.io/agent-boss/ielts-app/`

---

## 📁 CẤU TRÚC THƯ MỤC DỰ ÁN
```text
ielts-app/
├── index.html       # Giao diện chính của ứng dụng web
├── style.css        # Toàn bộ màu sắc, hiệu ứng thẻ 3D và giao diện Roadmap
├── data.js          # Kho bài học âm nhạc, thời trang, công nghệ và từ vựng IELTS
├── app.js           # Bộ não xử lý game, âm thanh, phát âm và lưu tiến độ
└── README.md        # Bản hướng dẫn chi tiết này
```
