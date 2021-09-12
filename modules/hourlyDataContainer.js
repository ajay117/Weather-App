import showOnlyHour from './utility/showOnlyHour.js';

// Container which will include hourly data.
export default function populateByHour(weatherData, hourlyDataContainer) {
  try {
    for (let i = 0; i < 24; i += 1) {
      const div = document.createElement('div');
      const img = document.createElement('img');
      const timePara = document.createElement('p');
      const tempPara = document.createElement('p');
      const unixTimeStamp = weatherData.hourly[i].dt;
      const localTimeStr = new Date(unixTimeStamp * 1000).toLocaleTimeString();

      timePara.textContent = `${showOnlyHour(localTimeStr)}`;

      img.src = `http://openweathermap.org/img/wn/${weatherData.hourly[i].weather[0].icon}@2x.png`;
      img.alt = `${weatherData.hourly[i].weather[0].description} showing image`;
      tempPara.textContent = weatherData.hourly[i].temp;

      div.append(timePara, img, tempPara);
      hourlyDataContainer.appendChild(div);
    }
  } catch (err) {
    console.log(err);
  }
}
