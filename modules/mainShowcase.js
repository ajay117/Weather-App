export default function mainShowcase(cityName, countryName, weatherData) {
  const section = document.createElement('section');
  const showcase = document.createElement('div');
  const mainData = document.createElement('div');
  const otherWeatherData = document.createElement('div');
  const h4 = document.createElement('h4');
  const tempInfo = document.createElement('p');
  const humidityInfo = document.createElement('p');
  const cloudInfo = document.createElement('p');
  const img = document.createElement('img');

  h4.textContent = `${cityName}, ${countryName}`;
  img.src = `http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`;
  //   img.src = 'http://openweathermap.org/img/wn/01n@2x.png';
  img.alt = `${weatherData.current.weather.description} showing image`;
  tempInfo.innerHTML = `Temperature: ${
    weatherData.current.temp
  }${String.fromCharCode(176)}`;
  mainData.append(img, tempInfo);

  humidityInfo.textContent = `Humidity: ${weatherData.current.humidity}%`;
  cloudInfo.textContent = `Cloud: ${weatherData.current.clouds}%`;
  otherWeatherData.append(humidityInfo, cloudInfo);

  showcase.append(mainData, otherWeatherData);
  section.appendChild(showcase);
  return section;
}
