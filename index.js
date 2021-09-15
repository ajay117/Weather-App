import mainShowcase from './modules/mainShowcase.js';
import populateCurrentWeatherOtherData from './modules/currentWeatherOtherData.js';
import populateDailyData from './modules/dayByDayDataContainer.js';
// import populateForm from './modules/form.js';

const form = document.querySelector('form');
const showcase = document.querySelector('.showcase');

// populateForm(showcase);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  showcase.innerHTML = '';
  const input = document.querySelector('#city-name');
  // We will use this function to fetch lat, lon and other data from API.
  // & use in when calling call().
  const cityInfo = async () => {
    try {
      // import mainShowcase from '../modules/mainData.js';
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&&appid=659000770aa7828200a70f67beaa5b6c`,
        { mode: 'cors' },
      );
      const info = await response.json();
      const subData = info[0];
      return [subData.name, subData.country, subData.lat, subData.lon];
    } catch (err) {
      return err;
    }
  };

  // Callling API for weather data for specific location.
  const call = async () => {
    try {
      const [cityName, countryName, lat, lon] = await cityInfo();
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}9778&exclude=minutely&units=metric&appid=659000770aa7828200a70f67beaa5b6c`,
        { mode: 'cors' },
      );
      const weatherData = await response.json();
      showcase.appendChild(mainShowcase(cityName, countryName, weatherData));

      populateCurrentWeatherOtherData(weatherData, showcase);
      showcase.appendChild(populateDailyData(weatherData));
      return weatherData;
    } catch (err) {
      return err;
    }
  };

  call();
});
