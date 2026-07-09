/* =====================================================================
 * 📌 CẤU HÌNH DASHBOARD — CHỈNH SỬA FILE NÀY ĐỂ THÊM / SỬA / XOÁ LINK
 * =====================================================================
 *
 * Không cần đụng vào index.html hay script.js.
 * Card và nút lọc danh mục sẽ tự động được tạo từ dữ liệu bên dưới.
 *
 * ➕ THÊM LINK MỚI: copy một block trong LINKS, sửa lại nội dung.
 *    - title       : tên hiển thị (ngắn gọn, rõ ràng)
 *    - description : mô tả ngắn bên dưới tên
 *    - url         : địa chỉ link
 *    - category    : một key trong CATEGORIES bên dưới
 *    - icon        : (tuỳ chọn) emoji riêng — bỏ trống sẽ dùng icon của danh mục
 *    - accent      : (tuỳ chọn) cặp màu riêng ['#màu1', '#màu2'] — bỏ trống
 *                    sẽ dùng màu của danh mục
 *
 * ➕ THÊM DANH MỤC MỚI: thêm một dòng vào CATEGORIES.
 *    Nút lọc chỉ hiện khi danh mục có ít nhất một link.
 * ===================================================================== */

const CATEGORIES = {
    home:       { label: 'Trang chủ', icon: '🏠', accent: ['#f43f5e', '#fb7185'] },
    management: { label: 'Quản lý',   icon: '⚙️', accent: ['#f59e0b', '#fbbf24'] },
    remote:     { label: 'Remote',    icon: '🖥️', accent: ['#06b6d4', '#22d3ee'] },
    cloud:      { label: 'Cloud',     icon: '☁️', accent: ['#4285f4', '#669df6'] },
    business:   { label: 'Business',  icon: '💼', accent: ['#3b82f6', '#60a5fa'] },
    dev:        { label: 'Dev',       icon: '👨‍💻', accent: ['#10b981', '#34d399'] },
    ai:         { label: 'AI Chat',   icon: '🤖', accent: ['#14b8a6', '#2dd4bf'] },
    email:      { label: 'Email',     icon: '📧', accent: ['#ef4444', '#f87171'] },
    news:       { label: 'Tin tức',   icon: '📰', accent: ['#6366f1', '#818cf8'] },
    game:       { label: 'Game',      icon: '🎮', accent: ['#ec4899', '#f472b6'] },
};

const LINKS = [
    // ---------- Trang chủ ----------
    {
        title: 'Hamaytri.com',
        description: 'Trang chủ cá nhân',
        url: 'https://hamaytri.com',
        category: 'home',
    },

    // ---------- Quản lý ----------
    {
        title: 'Cloudflare',
        description: 'Quản lý DNS & domain hamaytri.com',
        url: 'https://dash.cloudflare.com/3b792339272440d21d82873e719fb2e2/hamaytri.com',
        category: 'management',
    },

    // ---------- Remote ----------
    {
        title: 'Remote Desktop',
        description: 'Apache Guacamole — truy cập máy từ xa',
        url: 'https://remote.hamaytri.com/guacamole/#/',
        category: 'remote',
    },

    // ---------- Cloud ----------
    {
        title: 'Google Cloud',
        description: 'Console quản lý VM (Compute Engine)',
        url: 'https://console.cloud.google.com/compute/overview?project=project-7997a415-95c2-40ab-920',
        category: 'cloud',
    },

    // ---------- Business ----------
    {
        title: 'Notion Workspace',
        description: 'Không gian làm việc business',
        url: 'https://hamaytri.notion.site/',
        icon: '📔',
        category: 'business',
    },
    {
        title: 'Notion Docs',
        description: 'Cập nhật tài liệu & documentation',
        url: 'https://app.notion.com/p/hamaytri/Documentations-39720d80a9ee805fabb7d165484d3b1a',
        icon: '📝',
        category: 'business',
        accent: ['#8b5cf6', '#a78bfa'],
    },

    // ---------- Dev ----------
    {
        title: 'GitHub Copilot',
        description: 'Phiên chat sửa trang chủ',
        url: 'https://github.com/copilot/c/4116eef5-8b20-4ac9-8bff-ae555a6608ca',
        category: 'dev',
    },
    {
        title: 'Claude Code',
        description: 'Code cùng Claude',
        url: 'https://claude.ai/code',
        icon: '👨‍💻',
        category: 'dev',
    },
    {
        title: 'My Code',
        description: 'Code with me',
        url: 'https://code.hamaytri.com/',
        icon: '💻',
        category: 'dev',
    },

    // ---------- AI Chat ----------
    {
        title: 'Claude',
        description: 'Trợ lý AI của Anthropic',
        url: 'https://claude.ai/new',
        icon: '💬',
        category: 'ai',
    },
    {
        title: 'ChatGPT',
        description: 'Thư viện hội thoại',
        url: 'https://chatgpt.com/library',
        category: 'ai',
        accent: ['#0ea5e9', '#38bdf8'],
    },
    {
        title: 'Cùng Chat',
        description: 'Chat tự host tại chat.hamaytri.com',
        url: 'https://chat.hamaytri.com',
        icon: '💬',
        category: 'ai',
        accent: ['#8b5cf6', '#c084fc'],
    },

    // ---------- Email ----------
    {
        title: 'Gmail',
        description: 'Hộp thư đến',
        url: 'https://mail.google.com/mail/u/0/#inbox',
        category: 'email',
    },

    // ---------- Tin tức ----------
    {
        title: 'Grok Tasks',
        description: 'Cập nhật tin tức hàng ngày',
        url: 'https://grok.com/tasks',
        category: 'news',
    },

    // ---------- Game ----------
    {
        title: '2048',
        description: 'Game xếp số giải trí',
        url: 'https://buivantri8433.github.io/2048/',
        category: 'game',
    },
    {
        title: 'Flappy Birds',
        description: 'Game chim bay giải trí',
        url: 'https://buivantri8433.github.io/flappy-birds/',
        icon: '🐦',
        category: 'game',
        accent: ['#f97316', '#fb923c'],
    },
];
