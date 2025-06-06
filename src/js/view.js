class View {
  _submit = document.querySelector(".search-box--submit");
  _cityName = document.querySelector(".search-box--entry");
  _condition = document.querySelector(".main-box--icon");
  _cityDisplay = document.querySelector(".main-box--city");

  _thunderMarkup =
    '<ion-icon name="thunderstorm-outline" class="main-box--icon"></ion-icon>';
  _rainMarkup =
    '<ion-icon name="rainy-outline" class="main-box--icon"></ion-icon>';
  _sunnyMarkup =
    '<ion-icon name="sunny-outline" class="main-box--icon"></ion-icon>';
  _cloudyMarkup =
    '<ion-icon name="cloudy-outline" class="main-box--icon"></ion-icon>';
  _snowMarkup =
    '<ion-icon name="snow-outline" class="main-box--icon"></ion-icon>';
  _mistMarkup =
    '<ion-icon name="cloudy-outline" class="main-box--icon"></ion-icon>';

  renderSpinner() {
    this.clearView();
    this.clearSpinner();
    const markup = '<div class="loader"></div>';
    const weatherApp = document.querySelector(".weather-app");
    if (weatherApp) weatherApp.insertAdjacentHTML("afterbegin", markup);
  }

  clearSpinner() {
    const loader = document.querySelector(".loader");
    if (loader) loader.remove();
  }

  clearView() {
    const tempElement = document.querySelector(".temp");
    const pressureElement = document.querySelector(".pressure-info");
    const windElement = document.querySelector(".wind-info");
    const humidElement = document.querySelector(".humid-info");
    if (tempElement) tempElement.textContent = "";
    if (pressureElement) pressureElement.textContent = "";
    if (windElement) windElement.textContent = "";
    if (humidElement) humidElement.textContent = "";
    if (this._condition) this._condition.innerHTML = "";
    if (this._cityDisplay) this._cityDisplay.textContent = "";
  }

  addHandlerSelectCity(handler) {
    if (this._submit) {
      this._submit.addEventListener("click", (e) => {
        e.preventDefault();
        const city = this._cityName.value.trim();
        if (city) handler(city);
        this._cityName.value = "";
      });
    }

    if (this._cityName) {
      this._cityName.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && this._cityName.value.trim()) {
          e.preventDefault();
          handler(this._cityName.value.trim());
          this._cityName.value = "";
        }
      });
    }
  }

  renderWeather(data) {
    this.clearSpinner();
    if (!data) return;

    this._cityDisplay.textContent = `${data.name}`;
    const tempElement = document.querySelector(".temp");
    const pressureElement = document.querySelector(".pressure-info");
    const windElement = document.querySelector(".wind-info");
    const humidElement = document.querySelector(".humid-info");

    if (tempElement)
      tempElement.textContent = `${Math.round(data.temperature)}°C`;
    if (pressureElement) pressureElement.textContent = `${data.pressure} hPa`;
    if (windElement) windElement.textContent = `${data.wind} km/h`;
    if (humidElement) humidElement.textContent = `${data.humidity}%`;

    if (this._condition) {
      this._condition.innerHTML = ""; // Clear existing icons
      let markup;
      switch (data.weatherCondition) {
        case "Thunderstorm":
          markup = this._thunderMarkup;
          break;
        case "Drizzle":
        case "Rain":
          markup = this._rainMarkup;
          break;
        case "Snow":
          markup = this._snowMarkup;
          break;
        case "Clear":
          markup = this._sunnyMarkup;
          break;
        case "Clouds":
          markup = this._cloudyMarkup;
          break;
        case "Mist":
        case "Smoke":
        case "Haze":
        case "Dust":
        case "Fog":
        case "Sand":
        case "Ash":
        case "Squall":
        case "Tornado":
          markup = this._mistMarkup;
          break;
        default:
          markup = this._cloudyMarkup; // Fallback
      }
      this._condition.insertAdjacentHTML("afterbegin", markup);
    }
  }

  renderError(message) {
    this.clearSpinner();
    const errorElement = document.createElement("div");
    errorElement.className = "error";
    errorElement.textContent = message || "Failed to load weather data.";
    const weatherApp = document.querySelector(".weather-app");
    if (weatherApp) weatherApp.prepend(errorElement);
  }
}

export default new View();
