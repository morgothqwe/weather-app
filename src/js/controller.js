import * as model from "./model";
import view from "./view";

const controlSelectCity = async function (city) {
  // const cityName = view.addHandlerSelectCity(city);
  // view.renderWeather(cityName);
  const data = await model.weatherCondition(city);
  view.renderWeather(data);
};

const init = async function () {
  // await model.weatherCondition(controlSelectCity);
  view.addHandlerSelectCity(controlSelectCity);
  controlSelectCity("Isfahan");
};

init();
