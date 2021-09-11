async function callApi() {
  try {
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=pokhara&appid=659000770aa7828200a70f67beaa5b6c&units=imperial',
      { mode: 'cors' },
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (err) {
    return err;
  }
}
callApi();

// .then((response) => response.json())
// .then((response) => console.log(response));
