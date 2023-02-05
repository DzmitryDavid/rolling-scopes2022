const apiKey = '0c5b3d16dc85bdf8bea6b96976954874';
export const weather = () => {
  const weatherIcon = document.querySelector('.weather-icon');
  const tempEl = document.querySelector('.temperature');
  const descrEl = document.querySelector('.weather-description');
  const cityInput = document.querySelector('.city');
  const windEl = document.querySelector('.wind');
  const humidityEl = document.querySelector('.humidity');

  const setCity = () => {
    const value = cityInput.value;
    cityInput.blur();
    const iconStr = weatherIcon.classList.value.slice(-7);
    weatherIcon.classList.remove(iconStr);
    getWeather(value);
  };

  async function getWeather(city = 'Minsk') {
    try {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.cod === 404) {
        weatherIcon.textContent = data.message;
      }
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      weatherIcon.textContent = cityInput.value;
      tempEl.textContent = `temperature ${data.main.temp}°C`;
      descrEl.textContent = data.weather[0].description;
      windEl.textContent = `Wind speed: ${data.wind.speed} m/s`;
      humidityEl.textContent = `Humidity: ${data.main.humidity}%`;
    } catch (error) {
      weatherIcon.textContent = error.message;
    }
  }
  getWeather();
  cityInput.addEventListener('change', setCity);
};
