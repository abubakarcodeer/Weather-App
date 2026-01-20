# OpenWeatherMap API Integration

This project demonstrates how to use the **OpenWeatherMap API** to fetch and display real-time weather data such as temperature, humidity, weather conditions, and wind speed for any city.

## 🚀 Features

* Get current weather by city name
* Displays:

  * Temperature (°C / °F)
  * Weather condition (Clear, Clouds, Rain, etc.)
  * Humidity
  * Wind speed
* Uses OpenWeatherMap REST API
* Easy to integrate with JavaScript

## 🧩 Technologies Used

* JavaScript (Fetch API)
* OpenWeatherMap API
* HTML, CSS and JS

## 🔑 Getting an API Key

1. Go to **OpenWeatherMap** official website
2. Create a free account
3. Navigate to **API Keys** section
4. Generate your API key

## ⚙️ API Endpoint Used

```text
https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&appid={API_KEY}&units=metric
```

### Parameters:

| Parameter | Description       |
| --------- | ----------------- |
| q         | City name         |
| appid     | Your API key      |
| units     | metric / imperial |

## ❗ Common Errors

| Error | Reason            |
| ----- | ----------------- |
| 401   | Invalid API Key   |
| 404   | City not found    |
| 429   | Too many requests |


If you like this project, please give it a ⭐ on GitHub.
