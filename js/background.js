// Fotos
const backgrounds = [
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1524777314-0d80b69f4ee6?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1476019726013-6f4c0e8ba5c9?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1454789476662-53eb53bdf63b?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1500&q=80'
];

let currentIndex = -1;

function setRandomBackground() {
  // 1. Elegimos una imagen al azar que NUNCA sea la misma que ya está puesta
  let index;
  do {
    index = Math.floor(Math.random() * backgrounds.length);
  } while (index === currentIndex);
  currentIndex = index;

  const nextUrl = backgrounds[index];

  // 2. Técnica de precarga
  const imgPreloader = new Image();
  imgPreloader.src = nextUrl;

  imgPreloader.onload = () => {
    // 3. Aplicamos la imagen a la variable CSS del body
    document.body.style.setProperty('--bg-image', `url('${nextUrl}')`);
    
    // 4. Guardamos la URL en la memoria para que la siguiente página la cargue al instante
    localStorage.setItem('dashboardBg', nextUrl);
  };
}


const themeStorageKey = 'dashboardTheme';

function setTheme(theme) {
  document.body.dataset.theme = theme;
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.title = theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
    toggle.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  }
  localStorage.setItem(themeStorageKey, theme);
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
  
  // Al entrar en cualquier página, miramos si ya teníamos un fondo guardado del paso anterior
  const savedBg = localStorage.getItem('dashboardBg');
  if (savedBg) {
    document.body.style.setProperty('--bg-image', `url('${savedBg}')`);
  } else {
    setRandomBackground(); // Si es la primera vez que entra, generamos uno nuevo
  }

  setInterval(setRandomBackground, 15000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBackground);
} else {
  initBackground();
}
