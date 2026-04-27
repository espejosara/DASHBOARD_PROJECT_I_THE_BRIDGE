// Fondos inspirados en la estética de Studio Ghibli: bosques, agua y caminos de novela.
const backgrounds = [
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1524777314-0d80b69f4ee6?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1476019726013-6f4c0e8ba5c9?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1454789476662-53eb53bdf63b?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1500&q=80'
];

function setRandomBackground() {
  const index = Math.floor(Math.random() * backgrounds.length);
  const isLight = document.body.dataset.theme === 'light';
  const overlayColor = isLight ? 'rgba(255,255,255,0.32)' : 'rgba(15,23,42,0.75)';
  document.body.style.backgroundImage = `linear-gradient(${overlayColor}, ${overlayColor}), url('${backgrounds[index]}')`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
}

const themeStorageKey = 'dashboardTheme';

function setTheme(theme) {
  document.body.dataset.theme = theme;
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.textContent = theme === 'dark' ? 'Modo claro' : 'Modo oscuro';
  }
  localStorage.setItem(themeStorageKey, theme);
  setRandomBackground();
}

function initTheme() {
  const savedTheme = localStorage.getItem(themeStorageKey) || 'dark';
  setTheme(savedTheme);

  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }
}

function initBackground() {
  initTheme();
  setRandomBackground();
  setInterval(setRandomBackground, 15000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBackground);
} else {
  initBackground();
}
