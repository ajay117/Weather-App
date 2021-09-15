import getDay from './utility/getOnlyDay.js';

export default function populateDailyData(weatherData) {
  try {
    const mainDiv = document.createElement('div');
    const dailyDataArr = weatherData.daily;
    for (let i = 0; i < dailyDataArr.length; i += 1) {
      const childDiv = document.createElement('div');
      const dayPara = document.createElement('p');
      const imgIcon = document.createElement('img');
      const minTempPara = document.createElement('p');
      const maxTempPara = document.createElement('p');
      // Weather data of individual day
      const dailyArrElem = dailyDataArr[i];
      const {
        dt,
        temp: { min, max },
        weather: [{ icon, description }],
      } = dailyArrElem;

      dayPara.textContent = `${getDay(dt)}`;
      imgIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      imgIcon.alt = `${description} showing image`;
      minTempPara.textContent = `${min}`;
      maxTempPara.textContent = `${max}`;

      childDiv.append(dayPara, imgIcon, minTempPara, maxTempPara);
      mainDiv.appendChild(childDiv);
    }
    return mainDiv;
  } catch (err) {
    console.log(err);
  }
}
