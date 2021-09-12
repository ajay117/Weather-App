// const input = document.querySelector('input');
// const searchBtn = document.querySelector('#search-btn');
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('#city-name');
  // We will use this function to fetch lat, lon and other data from API.
  // & use in when calling call().
  const cityInfo = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&&appid=659000770aa7828200a70f67beaa5b6c`,
      );
      const info = await response.json();
      const subData = info[0];
      return [subData.name, subData.country, subData.lat, subData.lon];
    } catch (err) {
      // Later do something with this error.
      console.log(err);
    }
  };
  cityInfo();
});

// Callling API for weather data for specific location.
const call = async () => {
  try {
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/onecall?lat=37.5683&lon=126.9778&exclude=minutely,hourly&appid=659000770aa7828200a70f67beaa5b6c',
      { mode: 'cors' },
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (err) {
    return err;
  }
};

call().then((data) => {
  const section = document.createElement('section');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  const para1 = document.createElement('p');
  const para2 = document.createElement('p');
  const para3 = document.createElement('p');
  const para4 = document.createElement('p');
});
