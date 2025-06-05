import * as model from "./model";
import view from "./view";

const controlSelectCity = async function (city) {
  view.renderSpinner();
  const data = await model.weatherCondition(city);
  view.renderWeather(data);
};

const init = function () {
  view.addHandlerSelectCity(controlSelectCity);
  controlSelectCity("isfahan");
};

init();
