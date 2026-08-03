/* ============================================
   THEME TOGGLE FUNCTIONALITY
   Управління темою оформлення
   ============================================ */

(function() {
    'use strict';

    const SIDEBAR_STATE_KEY = 'sidebarCollapsed';

    // Отримати збережену тему або встановити за замовчуванням
    const getTheme = () => {
        return localStorage.getItem('theme') || 'dark';
    };

    // Встановити тему
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateToggleButton(theme);
    };

    // Підсвітити активне посилання в бічній навігації
    const updateSidebarActiveLink = () => {
        const links = document.querySelectorAll('.sidebar-link');
        if (!links.length) return;

        const currentPath = window.location.pathname.split('/').pop() || 'index.html';

        links.forEach((link) => {
            const rawHref = link.getAttribute('href') || '';
            const isHashLink = rawHref.startsWith('#');
            let isActive = false;

            if (isHashLink) {
                isActive = currentPath === 'index.html' || currentPath === '';
            } else {
                const linkPath = new URL(link.href, window.location.href).pathname.split('/').pop();
                isActive = linkPath === currentPath;
            }

            link.classList.toggle('active', isActive);
        });
    };

    const setSidebarCollapsed = (isCollapsed) => {
        document.body.classList.toggle('sidebar-collapsed', isCollapsed);

        const button = document.querySelector('.sidebar-collapse-btn');
        if (!button) return;

        const label = button.querySelector('.sidebar-collapse-btn-label');
        const icon = button.querySelector('.sidebar-collapse-btn-icon');

        if (isCollapsed) {
            icon.textContent = '→';
            label.textContent = 'Показати';
            button.setAttribute('aria-expanded', 'false');
            button.setAttribute('title', 'Показати навігацію');
        } else {
            icon.textContent = '←';
            label.textContent = 'Згорнути';
            button.setAttribute('aria-expanded', 'true');
            button.setAttribute('title', 'Згорнути навігацію');
        }

        localStorage.setItem(SIDEBAR_STATE_KEY, isCollapsed ? 'true' : 'false');
    };

    const getSidebarCollapsed = () => {
        return localStorage.getItem(SIDEBAR_STATE_KEY) === 'true';
    };

    const toggleSidebar = () => {
        setSidebarCollapsed(!document.body.classList.contains('sidebar-collapsed'));
    };

    const injectSidebarControls = () => {
        const sidebarBrand = document.querySelector('.sidebar-brand');
        if (!sidebarBrand || sidebarBrand.querySelector('.sidebar-collapse-btn')) return;

        const header = sidebarBrand.querySelector('h2');
        if (!header) return;

        const headerRow = document.createElement('div');
        headerRow.className = 'sidebar-brand-header';

        const contentWrap = document.createElement('div');
        contentWrap.className = 'sidebar-brand-content';

        while (sidebarBrand.firstChild) {
            contentWrap.appendChild(sidebarBrand.firstChild);
        }

        const toggleButton = document.createElement('button');
        toggleButton.type = 'button';
        toggleButton.className = 'sidebar-collapse-btn';
        toggleButton.setAttribute('aria-expanded', 'true');
        toggleButton.setAttribute('title', 'Згорнути навігацію');
        toggleButton.innerHTML = '<span class="sidebar-collapse-btn-icon" aria-hidden="true">←</span><span class="sidebar-collapse-btn-label">Згорнути</span>';

        toggleButton.addEventListener('click', toggleSidebar);

        headerRow.appendChild(contentWrap);
        headerRow.appendChild(toggleButton);
        sidebarBrand.appendChild(headerRow);
    };

    // Оновити текст кнопки
    const updateToggleButton = (theme) => {
        const toggleBtn = document.getElementById('theme-toggle');
        if (!toggleBtn) return;

        const icon = toggleBtn.querySelector('.theme-toggle-icon');
        const text = toggleBtn.querySelector('.theme-toggle-text');

        if (theme === 'dark') {
            icon.textContent = '🌙';
            text.textContent = 'Темна';
        } else {
            icon.textContent = '☀️';
            text.textContent = 'Світла';
        }
    };

    // Перемкнути тему
    const toggleTheme = () => {
        const currentTheme = getTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);

        // Додати анімацію переходу
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    };

    // Ініціалізація при завантаженні сторінки
    const init = () => {
        // Встановити збережену тему
        const savedTheme = getTheme();
        setTheme(savedTheme);
        injectSidebarControls();
        setSidebarCollapsed(getSidebarCollapsed());
        updateSidebarActiveLink();

        // Додати обробник події на кнопку
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleTheme);
        }

        // Підтримка клавіатурного скорочення Ctrl+Shift+T
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'T') {
                toggleTheme();
            }
        });
    };

    // Запустити при завантаженні DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Експортувати для використання ззовні
    window.themeToggle = {
        toggle: toggleTheme,
        set: setTheme,
        get: getTheme
    };
})();
