# 🔗 My Links Dashboard

Dashboard cá nhân để truy cập nhanh các link thường dùng, xây dựng bằng HTML, CSS và JavaScript thuần (không framework, không build step).

🌐 Live: [dash.hamaytri.com](https://dash.hamaytri.com)

## 🌟 Tính năng

- 🔍 Tìm kiếm theo tên, mô tả, danh mục hoặc URL (phím tắt `Ctrl/Cmd + K`, `Esc` để xoá)
- 🏷️ Lọc theo danh mục — nút lọc tự động tạo từ dữ liệu
- 🌙 Dark mode / Light mode (mặc định theo hệ thống, lưu lựa chọn vào `localStorage`)
- 📱 Responsive, hoạt động tốt trên mọi thiết bị
- 🎨 Mỗi link có icon và màu gradient riêng, có thể tuỳ chỉnh từng link

## 📁 Cấu trúc tệp

```
dash/
├── index.html      # Khung trang (header, ô tìm kiếm, footer)
├── links.js        # ⭐ DỮ LIỆU — danh sách link & danh mục (sửa file này)
├── script.js       # Logic: render card, tìm kiếm, lọc, dark mode, phím tắt
├── style.css       # Stylesheet (bao gồm dark mode)
├── CNAME           # Domain cho GitHub Pages (dash.hamaytri.com)
└── README.md       # File này
```

## ➕ Thêm link mới

Chỉ cần mở **`links.js`** và thêm một object vào mảng `LINKS` — không cần đụng vào HTML:

```js
{
    title: 'Tên link',                    // tên hiển thị
    description: 'Mô tả ngắn gọn',        // mô tả bên dưới tên
    url: 'https://example.com',           // địa chỉ link
    category: 'dev',                      // một key trong CATEGORIES
    icon: '🚀',                           // (tuỳ chọn) bỏ trống → dùng icon danh mục
    accent: ['#667eea', '#764ba2'],       // (tuỳ chọn) bỏ trống → dùng màu danh mục
},
```

Card và bộ đếm sẽ tự động cập nhật.

## 🏷️ Thêm danh mục mới

Thêm một dòng vào object `CATEGORIES` trong `links.js`:

```js
tools: { label: 'Công cụ', icon: '🛠️', accent: ['#0ea5e9', '#38bdf8'] },
```

Nút lọc chỉ hiển thị khi danh mục có ít nhất một link.

## 🚀 Chạy local

```bash
git clone https://github.com/buivantri8433/dash.git
cd dash
npx http-server .        # hoặc mở thẳng index.html trong trình duyệt
```

## 🎨 Tuỳ chỉnh giao diện

Màu chủ đạo, bo góc, shadow… đều là biến CSS ở đầu `style.css` (`:root` cho light mode, `body.dark-mode` cho dark mode).

## 🔧 Browser Support

Chrome, Firefox, Safari, Edge (bản mới nhất).

## 📝 License

MIT License

---

**Tác giả:** Bùi Văn Trí
