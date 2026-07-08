/* =====================================================================
 * LOGIC CỦA DASHBOARD — không cần sửa file này khi thêm link mới.
 * Dữ liệu link và danh mục nằm ở links.js
 * ===================================================================== */

// ===== Render nút lọc danh mục (chỉ hiện danh mục có link) =====
const filterSection = document.getElementById('filterSection');

function renderFilters() {
    const usedCategories = Object.keys(CATEGORIES)
        .filter(key => LINKS.some(link => link.category === key));

    const allBtn = createFilterButton('all', '✨ Tất cả');
    allBtn.classList.add('active');
    filterSection.appendChild(allBtn);

    usedCategories.forEach(key => {
        const { icon, label } = CATEGORIES[key];
        filterSection.appendChild(createFilterButton(key, `${icon} ${label}`));
    });
}

function createFilterButton(filter, text) {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.filter = filter;
    btn.textContent = text;
    return btn;
}

// ===== Render card từ danh sách LINKS =====
const linksContainer = document.getElementById('linksContainer');

function renderLinks() {
    LINKS.forEach(link => {
        const category = CATEGORIES[link.category] || { label: link.category, icon: '🔗', accent: [] };
        const [accent, accent2] = link.accent || category.accent;

        const card = document.createElement('a');
        card.href = link.url;
        card.target = '_blank';
        card.rel = 'noopener';
        card.className = 'link-card';
        card.dataset.category = link.category;
        if (accent) {
            card.style.setProperty('--accent', accent);
            card.style.setProperty('--accent-2', accent2 || accent);
        }

        const top = document.createElement('div');
        top.className = 'card-top';

        const icon = document.createElement('div');
        icon.className = 'card-icon';
        icon.textContent = link.icon || category.icon;

        const badge = document.createElement('span');
        badge.className = 'card-category';
        badge.textContent = category.label;

        top.append(icon, badge);

        const content = document.createElement('div');
        content.className = 'card-content';

        const title = document.createElement('h3');
        title.className = 'card-title';
        title.textContent = link.title;

        const desc = document.createElement('p');
        desc.className = 'card-desc';
        desc.textContent = link.description;

        content.append(title, desc);

        const arrow = document.createElement('div');
        arrow.className = 'card-arrow';
        arrow.setAttribute('aria-hidden', 'true');
        arrow.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>';

        card.append(top, content, arrow);
        linksContainer.appendChild(card);
    });
}

renderFilters();
renderLinks();

// ===== Greeting theo giờ trong ngày =====
const greeting = document.getElementById('greeting');
const hour = new Date().getHours();
if (hour < 5) {
    greeting.textContent = 'Khuya rồi, ngủ sớm nhé 🌙';
} else if (hour < 12) {
    greeting.textContent = 'Chào buổi sáng ☀️';
} else if (hour < 18) {
    greeting.textContent = 'Chào buổi chiều 🌤️';
} else {
    greeting.textContent = 'Chào buổi tối 🌆';
}

// ===== Dark Mode Toggle =====
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

// Mặc định theo hệ thống nếu chưa từng chọn
const savedMode = localStorage.getItem('darkMode');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (savedMode === 'true' || (savedMode === null && prefersDark)) {
    body.classList.add('dark-mode');
    themeBtn.textContent = '☀️';
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    themeBtn.textContent = isDark ? '☀️' : '🌙';
});

// ===== Search + Filter =====
const searchBox = document.getElementById('searchBox');
const linkCards = document.querySelectorAll('.link-card');
const filterBtns = document.querySelectorAll('.filter-btn');
const noResults = document.getElementById('noResults');
const linkCount = document.getElementById('linkCount');

let activeFilter = 'all';

function applyFilters() {
    const searchTerm = searchBox.value.toLowerCase().trim();
    let visibleCount = 0;

    linkCards.forEach((card, i) => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const desc = card.querySelector('.card-desc').textContent.toLowerCase();
        const categoryLabel = card.querySelector('.card-category').textContent.toLowerCase();
        const url = (LINKS[i] ? LINKS[i].url : '').toLowerCase();
        const category = card.dataset.category;

        const matchesSearch = !searchTerm
            || title.includes(searchTerm)
            || desc.includes(searchTerm)
            || categoryLabel.includes(searchTerm)
            || url.includes(searchTerm);
        const matchesFilter = activeFilter === 'all' || category === activeFilter;

        if (matchesSearch && matchesFilter) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });

    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    linkCount.textContent = `${visibleCount}/${linkCards.length} links`;
}

searchBox.addEventListener('input', applyFilters);

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        applyFilters();
    });
});

applyFilters();

// ===== Keyboard shortcuts =====
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K để focus ô tìm kiếm
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchBox.focus();
    }

    // Escape để xoá tìm kiếm
    if (e.key === 'Escape' && document.activeElement === searchBox) {
        searchBox.value = '';
        searchBox.blur();
        applyFilters();
    }
});
