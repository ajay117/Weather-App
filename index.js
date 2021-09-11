async function callApi() {
	try {
		let response = await fetch(
			"https://api.openweathermap.org/data/2.5/weather?q=pokhara&appid=659000770aa7828200a70f67beaa5b6c&units=imperial",
			{ mode: "cors" }
		);
		let weatherData = await response.json();
		return weatherData;
	} catch (err) {
		console.log(err);
	}
}
callApi();

// .then((response) => response.json())
// .then((response) => console.log(response));
