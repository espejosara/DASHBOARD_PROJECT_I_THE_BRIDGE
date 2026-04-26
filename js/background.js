const backgrounds = [
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1525597591343-6a46a6c5cf3c?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1500&q=80'
];

function setRandomBackground() {
  const index = Math.floor(Math.random() * backgrounds.length);
  document.body.style.backgroundImage = `linear-gradient(rgba(15,23,42,0.75), rgba(15,23,42,0.75)), url('${backgrounds[index]}')`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
}

function initBackground() {
  setRandomBackground();
  setInterval(setRandomBackground, 15000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBackground);
} else {
  initBackground();
}
