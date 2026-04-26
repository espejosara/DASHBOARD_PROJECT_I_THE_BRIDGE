const clockElement = document.getElementById('clock');
const dateElement = document.getElementById('date');
const greetingElement = document.getElementById('greeting');

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

function initClock() {
  updateClock();
  setInterval(updateClock, 1000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initClock);
} else {
  initClock();
}
