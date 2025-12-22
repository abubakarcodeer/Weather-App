var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var temperature = document.getElementById("temp");
var cityName = document.getElementById("city");
var input = document.getElementById("search_city");
var searchBtn = document.getElementById("search_btn");
var weatherIcon = document.querySelector(".weather_icon");
var errorMessage = document.querySelector(".error_message");
var loadingMessage = document.querySelector(".loading_message");
var weatherSection = document.querySelector(".weather_updates_section");

// API Setup
var apiKey = API_KEY; // Add here your API key
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Main Function
async function checkWeather(city) {
    try {
        loadingMessage.style.display = "block";
        errorMessage.style.display = "none";
        weatherSection.style.display = "none";

        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (!response.ok) {
            throw new Error("City not found");
        } else {
            const data = await response.json();

            temperature.innerHTML = Math.round(data.main.temp) + "ºc";
            cityName.innerHTML = data.name;
            humidity.innerHTML = data.main.humidity + "%";
            wind.innerHTML = data.wind.speed + " Km/h";

            const condition = data.weather[0].main;
            if (condition === "Clouds") weatherIcon.src = "assets/clouds.png";
            else if (condition === "Rain") weatherIcon.src = "assets/rain.png";
            else if (condition === "Drizzle") weatherIcon.src = "assets/drizzle.png";
            else if (condition === "Mist") weatherIcon.src = "assets/mist.png";
            else if (condition === "Clear") weatherIcon.src = "assets/clear.png";
            else if (condition === "Snow") weatherIcon.src = "assets/snow.png";
            else weatherIcon.src = "assets/clear.png";

            weatherSection.style.display = "block";
            errorMessage.style.display = "none";
        }
    } catch (error) {
        errorMessage.style.display = "block";
        weatherSection.style.display = "none";
        errorMessage.innerHTML = error.message
    } finally {
        loadingMessage.style.display = "none";
    }
}
checkWeather("Islamabad")


searchBtn.addEventListener("click", () => {
    const city = input.value.trim();
    if (city !== "") {
        checkWeather(city);
    }
});

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const city = input.value.trim();
        if (city !== "") {
            checkWeather(city);
        }
    }
});
