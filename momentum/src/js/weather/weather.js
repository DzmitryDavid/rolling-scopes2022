const apiKey = '0c5b3d16dc85bdf8bea6b96976954874';
export const weather = () => {
  const weatherIconEl = document.querySelector('.weather-icon');
  const tempEl = document.querySelector('.temperature');
  const descrEl = document.querySelector('.weather-description');
  const cityInput = document.querySelector('.city');
  const windEl = document.querySelector('.wind');
  const humidityEl = document.querySelector('.humidity');
  const weatherErrorEl = document.querySelector('.weather-error');
  const weatherContainerEl = document.querySelector('.weather-container');

  const setCity = () => {
    const value = cityInput.value;
    cityInput.blur();
    
    getWeather(value);
  };
  

  async function getWeather(city = 'Minsk') {
    try {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      if (res.status === 404) {
        weatherErrorEl.classList.add('weather-error--visible');
        weatherErrorEl.textContent = data.message;
        weatherContainerEl.classList.add('weather-container--hidden');
      }
      if (res.status === 200) {
        
        weatherErrorEl.classList.remove('weather-error--visible');
        weatherContainerEl.classList.remove('weather-container--hidden');
        

        weatherIconEl.classList.add(`owf-${data.weather[0].id}`);
        tempEl.textContent = `temperature ${Math.floor(data.main.temp)}°C`;
        descrEl.textContent = data.weather[0].description;
        windEl.textContent = `Wind speed: ${Math.floor(data.wind.speed)} m/s`;
        humidityEl.textContent = `Humidity: ${data.main.humidity}%`;
        
      }
    } catch (error) {
      console.log(error);
      // if(){}
      // weatherIcon.textContent = error.message;
    }
  }
  getWeather();
  cityInput.addEventListener('change', setCity);
};
