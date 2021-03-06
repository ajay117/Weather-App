import populateByHour from './hourlyDataContainer.js';

export default function mainShowcase(cityName, countryName, weatherData) {
  try {
    const section = document.createElement('section');
    const showcase = document.createElement('div');
    const mainData = document.createElement('div');

    // This will contain hourly forecast
    const hourlyDataContainer = document.createElement('div');
    const h4 = document.createElement('h4');
    const tempInfo = document.createElement('p');
    const img = document.createElement('img');

    h4.textContent = `${cityName}, ${countryName}`;
    img.src = `http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`;
    img.alt = `${weatherData.current.weather[0].description} showing image`;
    tempInfo.innerHTML = `Temperature: ${
      weatherData.current.temp
    }${String.fromCharCode(176)}`;

    mainData.append(img, tempInfo);
    // mainData.classList.add('mr-30');

    hourlyDataContainer.classList.add('flex', 'overflow-x');
    populateByHour(weatherData, hourlyDataContainer);

    showcase.appendChild(mainData);
    // showcase.classList.add('flex');

    section.append(h4, showcase, hourlyDataContainer);
    return section;
  } catch (err) {
    console.log(err);
  }
}
