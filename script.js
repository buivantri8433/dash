// Dark Mode Toggle
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    body.classList.add('dark-mode');
    themeBtn.textContent = '☀️';
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    themeBtn.textContent = isDark ? '☀️' : '🌙';
});

// Search Functionality
const searchBox = document.getElementById('searchBox');
const linkCards = document.querySelectorAll('.link-card');
const noResults = document.getElementById('noResults');

searchBox.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    let visibleCount = 0;

    linkCards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const desc = card.querySelector('.card-desc').textContent.toLowerCase();

        if (title.includes(searchTerm) || desc.includes(searchTerm)) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });

    // Show no results message
    if (visibleCount === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
});

// Filter Functionality
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter cards
        const filter = btn.getAttribute('data-filter');
        let visibleCount = 0;

        linkCards.forEach(card => {
            if (filter === 'all') {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                const category = card.getAttribute('data-category');
                if (category === filter) {
                    card.classList.remove('hidden');
                    visibleCount++;
                } else {
                    card.classList.add('hidden');
                }
            }
        });

        // Show no results message
        if (visibleCount === 0) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
        }
    });
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchBox.focus();
    }

    // Escape to clear search
    if (e.key === 'Escape' && document.activeElement === searchBox) {
        searchBox.value = '';
        searchBox.blur();
        linkCards.forEach(card => card.classList.remove('hidden'));
        noResults.style.display = 'none';
    }
});

// Log available shortcuts
console.log('🔗 My Links Dashboard');
console.log('Shortcuts:');
console.log('• Ctrl/Cmd + K: Focus search');
console.log('• Escape: Clear search');