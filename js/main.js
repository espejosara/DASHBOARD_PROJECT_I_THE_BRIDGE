const clockElement = document.getElementById('clock');
const dateElement = document.getElementById('date');
const greetingElement = document.getElementById('greeting');

const backgrounds = [
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1525597591343-6a46a6c5cf3c?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=80'
];

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function getGreeting(hour) {
  if (hour >= 0 && hour <= 7) return 'Es hora de descansar. Apaga y sigue mañana.';
  if (hour <= 12) return 'Buenos días, desayuna fuerte y a darle al código.';
  if (hour <= 14) return 'Echa un rato más pero no olvides comer.';
  if (hour <= 16) return 'Espero que hayas comido.';
  if (hour <= 18) return 'Buenas tardes, el último empujón.';
  if (hour <= 22) return 'Esto ya son horas extras, ... piensa en parar pronto.';
  return 'Buenas noches, es hora de pensar en parar y descansar.';
}

function updateClock() {
  const now = new Date();
  const hours = addLeadingZero(now.getHours());
  const minutes = addLeadingZero(now.getMinutes());
  const seconds = addLeadingZero(now.getSeconds());

  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  dateElement.textContent = `${addLeadingZero(now.getDate())}/${addLeadingZero(now.getMonth() + 1)}/${now.getFullYear()}`;
  greetingElement.textContent = getGreeting(now.getHours());
}

function setRandomBackground() {
  const index = Math.floor(Math.random() * backgrounds.length);
  document.body.style.backgroundImage = `linear-gradient(rgba(15,23,42,0.6), rgba(15,23,42,0.6)), url('${backgrounds[index]}')`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
}

function initApp() {
  updateClock();
  setRandomBackground();
  setInterval(updateClock, 1000);
  setInterval(setRandomBackground, 15000);
}

document.addEventListener('DOMContentLoaded', initApp);
