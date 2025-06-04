class View {
  _submit = document.querySelector(".search-box--submit");
  _cityName = document.querySelector(".search-box--entry");

  addHandlerSelectCity(handler) {
    this._submit.addEventListener("click", (e) => {
      e.preventDefault();

      const city = this._cityName.value;
      if (!city) return;

      handler(city);
    });
  }
  renderWeather(data) {
    document.querySelector(".temp").textContent = data.temperature;
    document.querySelector(".pressure-info").textContent = data.pressure;
    document.querySelector(".wind-info").textContent = data.wind;
    document.querySelector(".humid-info").textContent = data.humidity;
  }
}

export default new View();
