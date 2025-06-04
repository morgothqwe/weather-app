import * as model from "./model";
import view from "./view";

const controlCurrentCondition = async function () {
  // city = "London";
  const res = await model.weatherCondition();
  // console.log(res);
};

const init = function () {
  controlCurrentCondition();
};

init();
