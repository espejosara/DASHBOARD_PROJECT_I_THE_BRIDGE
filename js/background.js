const backgrounds = [
  'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1524777314-0d80b69f4ee6?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1454789476662-53eb53bdf63b?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1518199266793-6f213a86ed22?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=80'
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
