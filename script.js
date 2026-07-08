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

    linkCards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const desc = card.querySelector('.card-desc').textContent.toLowerCase();
        const category = card.getAttribute('data-category');

        const matchesSearch = !searchTerm || title.includes(searchTerm) || desc.includes(searchTerm);
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
        activeFilter = btn.getAttribute('data-filter');
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

console.log('🔗 My Links Dashboard');
console.log('Shortcuts:');
console.log('• Ctrl/Cmd + K: Focus search');
console.log('• Escape: Clear search');
