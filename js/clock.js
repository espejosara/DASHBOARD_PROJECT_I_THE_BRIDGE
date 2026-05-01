const clockElement = document.getElementById('clock');

if (clockElement) {
  const dateElement = document.getElementById('date');
  const greetingElement = document.getElementById('greeting');
  const progressBar = document.getElementById('day-progress-bar');

  function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }

  function getGreeting(hour) {
    if (hour >= 0 && hour < 7) return 'Sistema en modo reposo. Es hora de apagar el monitor y recargar baterías.';
    if (hour < 12) return 'Buenos días. Café cargado, entorno listo... ¡A picar código!';
    if (hour < 14) return 'Sigue así, pero no olvides hacer un commit y salir a por comida.';
    if (hour < 16) return 'Esperamos que el almuerzo no te haya dado sueño. ¡A por el siguiente sprint!';
    if (hour < 18) return 'Buenas tardes. Últimos ajustes antes del cierre. ¡Cero bugs hoy!';
    if (hour < 22) return 'Esto ya son horas extras. Cuidado con el código espagueti, mejor ir parando.';
    return 'Buenas noches. El sistema necesita un reboot. Mañana será otro gran despliegue.';
  }

  function updateClock() {
    const now = new Date();
    
    // Guardamos los números brutos para el cálculo matemático de la barra
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    // 1. Ponemos la hora y fecha en el HTML (usando los ceros a la izquierda)
    clockElement.textContent = `${addLeadingZero(h)}:${addLeadingZero(m)}:${addLeadingZero(s)}`;
    if (dateElement) dateElement.textContent = `${addLeadingZero(now.getDate())}/${addLeadingZero(now.getMonth() + 1)}/${now.getFullYear()}`;
    if (greetingElement) greetingElement.textContent = getGreeting(h);

    // 2. Lógica de la Barra de Progreso 
    const totalSecondsInDay = 86400; // Segundos totales en 24h
    const secondsPassed = (h * 3600) + (m * 60) + s;
    const progressPercent = (secondsPassed / totalSecondsInDay) * 100;

    // Actualizamos la anchura en el CSS
    if (progressBar) {
      progressBar.style.width = `${progressPercent}%`;
    }
  }

  function initClock() {
    updateClock();
    setInterval(updateClock, 1000);
  }

  // Arrancar el reloj cuando el HTML esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initClock);
  } else {
    initClock();
  }
}