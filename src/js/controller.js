import * as model from "./model";
import view from "./view";

const controlSelectCity = async function (city) {
  try {
    view.renderSpinner();
    const data = await model.weatherCondition(city);
    view.renderWeather(data);
  } catch (err) {
    console.log(`${err}: Please Try Again!`);
  }
};

const init = function () {
  view.addHandlerSelectCity(controlSelectCity);
  controlSelectCity("isfahan");
};

init();
