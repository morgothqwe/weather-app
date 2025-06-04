import * as model from "./model";
import view from "./view";

const controlSelectCity = async function (city) {
  const data = await model.weatherCondition(city);
  view.renderWeather(data);
};

const init = async function () {
  view.addHandlerSelectCity(controlSelectCity);
  controlSelectCity("Isfahan");
};

init();
