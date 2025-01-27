// Gestionnaire de thème
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

// Appliquer le thème sauvegardé
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    updateSectionBackgrounds(newTheme); // Mettre à jour les arrière-plans des sections
});

function updateThemeIcon(theme) {
    const icon = theme === 'dark' ? 'fa-sun' : 'fa-moon';
    themeToggle.innerHTML = `<i class="fas ${icon}"></i>`;
}

// Fonction pour mettre à jour les arrière-plans des sections
function updateSectionBackgrounds(theme) {
    const sections = document.querySelectorAll('.bg-light');
    sections.forEach(section => {
        section.style.backgroundColor = theme === 'dark' ? 'var(--card-bg)' : 'var(--bg-color)';
    });
}