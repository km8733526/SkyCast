# 🌤️ Weather App

A clean and minimal weather app that shows real-time weather and a 5-day forecast for any city, built with vanilla HTML, CSS, and JavaScript.

## 📸 Preview

> Search for any city to see current weather conditions, humidity, wind speed, and a 5-day forecast — all in a sleek glassmorphism UI.

## 📁 Project Structure

```
├── index.html          # App structure and layout
├── index.js            # API calls and DOM logic
├── style.css           # Glassmorphism styling
├── bg.jpg              # Background image
├── weather/            # Weather condition SVG icons
│   ├── clear.svg
│   ├── clouds.svg
│   ├── rain.svg
│   ├── snow.svg
│   ├── thunderstorm.svg
│   └── atmosphere.svg
└── message/            # UI state images
    ├── search-city.png
    └── not-found.png
```

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Current temperature, condition, humidity & wind speed
- 📅 5-day forecast with icons and average temperature
- 🗓️ Displays local date and time of the searched city
- ❌ Friendly error screen for invalid city names
- 🎨 Glassmorphism UI with a blurred background

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2. Get a free API key

This app uses the [WeatherAPI](https://www.weatherapi.com/) service.

1. Sign up at [weatherapi.com](https://www.weatherapi.com/)
2. Copy your API key from the dashboard

### 3. Add your API key

Open `index.js` and replace the existing key:

```js
const apiKey = 'YOUR_API_KEY_HERE';
```

### 4. Open the app

Just open `index.html` in any modern browser — no build tools or server needed.

## 🛠️ Built With

- **HTML5**
- **CSS3** — Glassmorphism, Flexbox, custom scrollbar
- **Vanilla JavaScript** — Async/Await, Fetch API
- **[WeatherAPI](https://www.weatherapi.com/)** — Weather data provider
- **Google Fonts** — Material Symbols (location icon)

## ⚠️ Notes

- The API key in `index.js` is publicly visible if you push to GitHub. Consider using a backend proxy or environment variables for production use.
- Make sure the `weather/` and `message/` asset folders are present, otherwise icons and state images won't load.
