// Date and hour
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

// Icon

function getIcon(icon) {
  let iconElement = "";
  if (icon === "03d" || icon === "03n") {
    iconElement = "src/gif/cloudygif.gif";
  } else if (icon === "04d") {
    iconElement = "src/gif/cloudygif.gif";
  } else if (icon === "04n") {
    iconElement = "src/gif/cloudygif.gif";
  } else if (icon === "01d") {
    iconElement = "src/gif/sunnygif.gif";
  } else if (icon === "01n") {
    iconElement = "src/gif/sunnygif.gif";
  } else if (icon === "02d") {
    iconElement = "src/gif/partsunnygif.gif";
  } else if (icon === "02n") {
    iconElement = "src/gif/partsunnygif.gif";
  } else if (icon === "09d") {
    iconElement = "src/gif/rainygif.gif";
  } else if (icon === "09n") {
    iconElement = "src/gif/rainygif.gif";
  } else if (icon === "10d") {
    iconElement = "src/gif/rainygif.gif";
  } else if (icon === "10n") {
    iconElement = "src/gif/rainygif.gif";
  } else if (icon === "13d") {
    iconElement = "far fa-snowflake";
  } else if (icon === "13n") {
    iconElement = "far fa-snowflake";
  } else if (icon === "50d") {
    iconElement = "fas fa-stream";
  } else if (icon === "50n") {
    iconElement = "fas fa-stream";
  }
  return iconElement;
}

// Name of the city and current temperature

function showWeather(response) {
  document.querySelector("#city").innerHTML = `${response.data.name}`;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather-type").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#date").innerHTML = formatDate(
    response.data.dt * 1000
  );
  document
    .querySelector("#main-icon")
    .setAttribute("src", getIcon(response.data.weather[0].icon));
}

function searchCity(city) {
  let apiKey = "c3c7aaea6607402edf670632e4d85131";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

let searchEngine = document.querySelector("#search-form");
searchEngine.addEventListener("submit", handleSubmit);

searchCity("Paris");

// Geolocation

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "c3c7aaea6607402edf670632e4d85131";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}

function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let geolocationButton = document.querySelector("#geolocation");
geolocationButton.addEventListener("click", getPosition);

// Celsius fahrenheit

function showCelsius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = 8;
}
let celsiusButton = document.querySelector("#celsius");
celsiusButton.addEventListener("click", showCelsius);

function showFahrenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = 48;
}

let fahrenheitButton = document.querySelector("#fahrenheit");
fahrenheitButton.addEventListener("click", showFahrenheit);
