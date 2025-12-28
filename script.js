const apiKey = "7e960818a20d415c8a5164010252812";

function getWeather() {
  const city = document.getElementById("city").value;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("weatherResult").innerHTML = `
        <h3>${data.location.name}, ${data.location.country}</h3>
        <p>🌡 Temperature: ${data.current.temp_c} °C</p>
        <p>☁ Condition: ${data.current.condition.text}</p>
        <p>💧 Humidity: ${data.current.humidity}%</p>
        <p>💨 Wind: ${data.current.wind_kph} km/h</p>
      `;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML =
        "<p>City not found ❌</p>";
    });
}
