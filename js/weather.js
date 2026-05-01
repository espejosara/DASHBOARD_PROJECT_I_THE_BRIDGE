const weatherForm = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const weatherOutput = document.getElementById('weather-output');

const apiKey = 'e1875ec53bcd49aeae595251260105';
const apiBase = 'https://api.weatherapi.com/v1/forecast.json';

function createHourCard(hourData) {
  return `
    <div class="hour-card">
      <span>${hourData.time.split(' ')[1]}</span>
      <img src="https:${hourData.condition.icon}" alt="${hourData.condition.text}" />
      <strong>${hourData.temp_c.toFixed(0)}°C</strong>
    </div>
  `;
}

function renderWeather(data) {
  const current = data.current;
  const forecastHours = data.forecast.forecastday[0].hour.slice(0, 6);

  weatherOutput.innerHTML = `
    <div class="weather-summary">
      <div>
        <p class="muted">${data.location.name}, ${data.location.country}</p>
        <h2>${current.condition.text}</h2>
        <p class="large-temp">${current.temp_c.toFixed(1)}°C</p>
      </div>
      <div class="weather-info-grid">
        <div class="metric-box"><strong>Humedad</strong><span>${current.humidity}%</span></div>
        <div class="metric-box"><strong>Viento</strong><span>${current.wind_kph.toFixed(0)} km/h</span></div>
        <div class="metric-box"><strong>Precipitación</strong><span>${current.precip_mm} mm</span></div>
      </div>
    </div>
    <section class="forecast-row">
      ${forecastHours.map(createHourCard).join('')}
    </section>
  `;
}

async function searchWeather(city) {
  weatherOutput.innerHTML = '<p class="muted">Cargando clima...</p>';

  try {
    const url = `${apiBase}?key=${apiKey}&q=${encodeURIComponent(city)}&aqi=no&days=1`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('No se pudo obtener el clima. Revisa la ciudad o la APIKEY.');
    }
    const data = await response.json();
    renderWeather(data);
  } catch (error) {
    weatherOutput.innerHTML = `<p class="error">${error.message}</p>`;
  }
}

if (weatherForm) {
  weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const city = cityInput.value.trim() || 'Madrid';
    searchWeather(city);
  });

  if (cityInput.value.trim()) {
    searchWeather(cityInput.value.trim());
  }
}
