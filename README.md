# 🔗 My Links Dashboard

Trang dashboard cá nhân để truy cập nhanh các link thường dùng, xây dựng bằng HTML, CSS và JavaScript thuần (không framework).

🌐 Live: [dash.hamaytri.com](https://dash.hamaytri.com)

## 🌟 Tính năng

- 🔍 Tìm kiếm link theo tên/mô tả (phím tắt `Ctrl/Cmd + K`, `Esc` để xoá)
- 🏷️ Lọc theo danh mục: Trang chủ, Dev, Business, Game, Tin tức, Email, AI Chat, Quản lý, Remote
- 🌙 Chuyển đổi Dark mode / Light mode (lưu lựa chọn vào `localStorage`)
- 📱 Responsive, hoạt động tốt trên mọi thiết bị
- 🎨 Mỗi link có icon và màu gradient riêng

## 📁 Cấu trúc tệp

```
dash/
├── index.html      # Nội dung trang và danh sách link
├── style.css       # Stylesheet (bao gồm dark mode)
├── script.js       # Xử lý tìm kiếm, lọc, dark mode, phím tắt
├── CNAME           # Domain cho GitHub Pages (dash.hamaytri.com)
└── README.md       # File này
```

## 🚀 Cách sử dụng

1. Clone repository
```bash
git clone https://github.com/buivantri8433/dash.git
```

2. Mở file `index.html` trong trình duyệt
```bash
cd dash
open index.html
```

3. Hoặc chạy bằng Live Server
```bash
npx http-server .
```

## 🎨 Tùy chỉnh

### Thêm link mới
Thêm một thẻ `<a class="link-card">` mới trong `index.html`, gán `data-category` phù hợp và style icon:
```html
<a href="https://example.com" target="_blank" class="link-card" data-category="dev">
    <div class="card-icon" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
        🔗
    </div>
    <div class="card-content">
        <h3 class="card-title">Tên link</h3>
        <p class="card-desc">Mô tả ngắn</p>
        <span class="card-category">Danh mục</span>
    </div>
    <div class="card-hover">
        <i class="fas fa-arrow-right"></i>
    </div>
</a>
```

### Thêm danh mục lọc mới
Thêm nút trong phần `.filter-section` của `index.html`:
```html
<button class="filter-btn" data-filter="ten-danh-muc">🏷️ Tên danh mục</button>
```

### Thay đổi màu sắc
Sửa biến CSS trong `style.css`.

## 📦 Dependencies

- [Font Awesome](https://fontawesome.com/) - Icon (mũi tên hover)

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

MIT License

---

**Tác giả:** Bùi Văn Trí
