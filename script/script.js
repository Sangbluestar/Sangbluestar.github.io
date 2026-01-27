// 1. Hàm để chèn Navbar vào đầu trang
function insertNavbar() {
    const navbarHTML = `
    <nav class="navbar">
        <div class="nav-links">
            <a href="/" class="lang" data-vi="Trang chính" data-en="Home">Trang chính</a>
            
            <a href="/travel/travel.html" class="lang" data-vi="Du lịch" data-en="Travel">Du lịch</a>
            
            <a href="/info.html" class="lang" data-vi="Thông tin" data-en="Info">Thông tin</a>
        </div>
        <div class="lang-controls">
            <button onclick="changeLanguage('vi')">VI</button>
            <button onclick="changeLanguage('en')">EN</button>
        </div>
    </nav>
    <hr>`;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}

// 2. Hàm chuyển đổi ngôn ngữ
function changeLanguage(lang) {
    const elements = document.querySelectorAll('.lang');
    elements.forEach(el => {
        const newText = el.getAttribute('data-' + lang);
        if (newText) el.textContent = newText;
    });

    localStorage.setItem('userLanguage', lang);
    document.documentElement.lang = lang;
}

// 3. Khởi chạy khi trang web load
document.addEventListener('DOMContentLoaded', () => {
    insertNavbar(); // Chèn thanh điều hướng trước
    const savedLang = localStorage.getItem('userLanguage') || 'vi';
    changeLanguage(savedLang); // Sau đó áp dụng ngôn ngữ
});