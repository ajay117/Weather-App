import toLocaleTimeString from './utility/toLocalTimeString.js';
// import populatePara from './utility/populatePara.js';

export default function populateCurrentWeatherOtherData(
  weatherData,
  parentContainer,
) {
  const container = document.createElement('div');
  container.classList.add('flex', 'flex-wrap', 'bg-black');
  Object.entries(weatherData.current).forEach((item) => {
    console.log(item);
    const div = document.createElement('div');
    const paraTop = document.createElement('p');
    const paraBottom = document.createElement('p');
    const desc = item[0];
    const value = item[1];
    if (desc === 'dt') {
      paraTop.textContent = 'Current Time';
      paraBottom.textContent = toLocaleTimeString(value);
    } else if (desc === 'sunrise') {
      paraTop.textContent = 'Sunrise';
      paraBottom.textContent = toLocaleTimeString(value);
    } else if (desc === 'sunset') {
      paraTop.textContent = 'Sunset';
      paraBottom.textContent = toLocaleTimeString(value);
    } else if (desc === 'temp') {
      paraTop.textContent = 'Temperature';
      paraBottom.textContent = `${value}${String.fromCharCode(176)}`;
    } else if (desc === 'feels_like') {
      paraTop.textContent = 'Feels Like';
      paraBottom.textContent = `${value}${String.fromCharCode(176)}`;
    } else if (desc === 'pressure') {
      paraTop.textContent = 'Pressure';
      paraBottom.textContent = `${value}hPa`;
    } else if (desc === 'humidity') {
      paraTop.textContent = 'Humidity';
      paraBottom.textContent = `${value}%`;
    } else if (desc === 'uvi') {
      paraTop.textContent = 'UVI';
      paraBottom.textContent = `${value}${String.fromCharCode(176)}`;
    } else if (desc === 'clouds') {
      paraTop.textContent = 'Cloud';
      paraBottom.textContent = `${value}%`;
    } else if (desc === 'visibility') {
      paraTop.textContent = 'Visibility';
      paraBottom.textContent = `${value}`;
    } else if (desc === 'wind_speed') {
      paraTop.textContent = 'Wind Speed';
      paraBottom.textContent = `${value} metre/sec`;
    } else if (desc === 'wind_deg') {
      paraTop.textContent = 'Wind Deg';
      paraBottom.textContent = `${value} metre/sec`;
    } else if (desc === 'wind_gust') {
      paraTop.textContent = 'Wind Gust';
      paraBottom.textContent = `${value} metre/sec`;
    } else if (desc === 'weather') {
      paraTop.textContent = 'Description';
      paraBottom.textContent = `${value[0].description}`;
    }
    div.classList.add('flex-basic');
    div.append(paraTop, paraBottom);
    container.appendChild(div);
  });
  parentContainer.appendChild(container);
}
