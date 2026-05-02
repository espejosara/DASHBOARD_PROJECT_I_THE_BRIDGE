// Fotos
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

async function setRandomBackground() {
  // 1. Elegimos una imagen al azar que NUNCA sea la misma que ya está puesta
  let index;
  do {
    index = Math.floor(Math.random() * backgrounds.length);
  } while (index === currentIndex);
  currentIndex = index;

  const nextUrl = backgrounds[index];

  // 2. Precarga usando Promesas y Async/Await (Temario Sprint 6)
  const imgPreloader = new Image();
  imgPreloader.src = nextUrl;

  try {
    // Esperamos pacientemente a que el navegador procese la imagen
    await imgPreloader.decode();
    
    // 3. Cuando está lista, la aplicamos directamente
    document.body.style.setProperty('--bg-image', `url('${nextUrl}')`);
    localStorage.setItem('dashboardBg', nextUrl);
    
  } catch (error) {
    // 4. Manejo de errores: Si la foto no existe (404), la borramos y probamos otra
    backgrounds.splice(index, 1);
    if (backgrounds.length > 0) setRandomBackground();
  }
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
  // Aseguramos que el fondo guardado sigue existiendo en tu nueva lista de Cloudinary
  if (savedBg && backgrounds.includes(savedBg)) {
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
