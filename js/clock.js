const clockElement = document.getElementById('clock');
const dateElement = document.getElementById('date');
const greetingElement = document.getElementById('greeting');

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function getGreeting(hour) {
  if (hour >= 0 && hour <= 7) return 'Sistema en modo reposo. Es hora de apagar el monitor y recargar baterías.';
  if (hour <= 12) return 'Buenos días. Café cargado, entorno listo... ¡A picar código!';
  if (hour <= 14) return 'Sigue así, pero no olvides hacer un commit y salir a por comida.';
  if (hour <= 16) return 'Esperamos que el almuerzo no te haya dado sueño. ¡A por el siguiente sprint!';
  if (hour <= 18) return 'Buenas tardes. Últimos ajustes antes del cierre. ¡Cero bugs hoy!';
  if (hour <= 22) return 'Esto ya son horas extras. Cuidado con el código espagueti, mejor ir parando.';
  return 'Buenas noches. El sistema necesita un reboot. Mañana será otro gran despliegue.';
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
