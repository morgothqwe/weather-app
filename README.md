# 🌤️ Weather App

A simple and responsive weather application built with **HTML**, **CSS**, and **JavaScript** following the **MVC (Model-View-Controller)** architectural pattern.

Live demo: [weather-app-keiwan.netlify.app](https://weather-app-keiwan.netlify.app/)

## 🚀 Features

- 🔎 Search weather by city name
- 📡 Fetches current weather data using the **OpenWeatherMap API**
- ⚙️ Follows clean MVC structure for scalability and clarity
- 🧠 Graceful error handling for invalid input and network failures

## 🏗️ Project Structure

```
📁 src
├── controller.js      # App logic controller
├── model.js           # Handles data fetching and processing
├── view.js            # Manages DOM updates
├── config.js          # Stores API key
├── index.html
├── style.css
└── script.js
```

## 🛠️ Technologies Used

- JavaScript (ES6+)
- HTML5 & CSS3
- OpenWeatherMap API
- Netlify for deployment

## 🧪 How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/morgothqwe/weather-app.git
   cd weather-app
   ```

2. Create a `config.js` file in `src/` with your OpenWeatherMap API key:

   ```js
   export const API_KEY = "your_api_key_here";
   ```

3. Open `index.html` in your browser (or use a local server).

## ✅ Future Improvements

- Add geolocation support
- Display weekly forecast
- Theme toggling (dark/light mode)

## 📄 License

This project is licensed under the MIT License.
