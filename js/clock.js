const clockElement = document.getElementById('clock');
const dateElement = document.getElementById('date');
const greetingElement = document.getElementById('greeting');

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function getGreeting(hour) {
  if (hour >= 0 && hour <= 7) return 'Descansa como Totoro al amanecer, que el bosque te cuide.';
  if (hour <= 12) return 'Buenos días: despierta con la magia de Chihiro en el tren del amanecer.';
  if (hour <= 14) return 'Es hora de comer como en el banquet del espíritu del baño, con calma y energía.';
  if (hour <= 16) return 'Sigue adelante con la fuerza de Ponyo y la brisa del mar.';
  if (hour <= 18) return 'Buenas tardes, el viento de Howl te acompaña en este último empujón.';
  if (hour <= 22) return 'La noche llega como en el castillo ambulante; piensa en parar pronto.';
  return 'Buenas noches, deja que el bosque y los espíritus te guíen hacia el descanso.';
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

function initClock() {
  updateClock();
  setInterval(updateClock, 1000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initClock);
} else {
  initClock();
}
