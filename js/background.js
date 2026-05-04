/* 1. FOTOS PARA EL FONDO */
const backgrounds = [
  "https://res.cloudinary.com/dm1w4w1o8/image/upload/v1777741914/Gemini_Generated_Image_ed6x68ed6x68ed6x_hnqs6p.png",
  "https://res.cloudinary.com/dm1w4w1o8/image/upload/v1777741804/Gemini_Generated_Image_qj5j2qj5j2qj5j2q_tltmdi.png",
  "https://res.cloudinary.com/dm1w4w1o8/image/upload/v1777741676/Gemini_Generated_Image_63lss563lss563ls_fadlyt.png",
  "https://res.cloudinary.com/dm1w4w1o8/image/upload/v1777741612/Gemini_Generated_Image_cgn6nacgn6nacgn6_dbuvcw.png",
  "https://res.cloudinary.com/dm1w4w1o8/image/upload/v1777741538/Gemini_Generated_Image_27poe627poe627po_ojn41l.png",
  "https://res.cloudinary.com/dm1w4w1o8/image/upload/v1777741394/anime-style-cozy-home-interior-with-furnishings_fdyzv3.jpg",
  "https://res.cloudinary.com/dm1w4w1o8/image/upload/v1777741370/3d-rendering-illustration-botanic-garden_vfl6f1.jpg",
];

let currentIndex = -1;

/* 2. LÓGICA DE FONDOS ASÍNCRONA */
async function setRandomBackground() {
  let index;
  do {
    index = Math.floor(Math.random() * backgrounds.length);
  } while (index === currentIndex);
  currentIndex = index;

  const nextUrl = backgrounds[index];

  const imgPreloader = new Image();
  imgPreloader.src = nextUrl;

  try {
    await imgPreloader.decode();
    
    document.body.style.setProperty('--bg-image', `url('${nextUrl}')`);
    localStorage.setItem('dashboardBg', nextUrl);
    
  } catch (error) {
    backgrounds.splice(index, 1);
    if (backgrounds.length > 0) setRandomBackground();
  }
}

/* 3. CLARO/OSCURO */
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
  const systemPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const savedTheme = localStorage.getItem(themeStorageKey) || (systemPrefersLight ? 'light' : 'dark');
  setTheme(savedTheme);

  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }
}

/* 4. INICIALIZACIÓN GLOBAL */
function initBackground() {
  initTheme();
  
  const savedBg = localStorage.getItem('dashboardBg');
  if (savedBg && backgrounds.includes(savedBg)) {
    document.body.style.setProperty('--bg-image', `url('${savedBg}')`);
  } else {
    setRandomBackground();
  }

  setInterval(setRandomBackground, 15000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBackground);
} else {
  initBackground();
}
