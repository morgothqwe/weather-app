import { API_KEY } from "./config";

export const weatherCondition = async function (city) {
  try {
    const geoResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!geoResponse) throw new Error(`${geoResponse.status}`);

    const geoData = await geoResponse.json();

    if (!geoData || !geoData.weather || !geoData.main)
      throw new Error("Incomplete data received.");

    return {
      temperature: geoData.main.temp,
      humidity: geoData.main.humidity,
      pressure: geoData.main.pressure,
      wind: geoData.wind.speed,
      weatherCondition: geoData.weather[0].main,
      name: geoData.name,
    };
  } catch (err) {
    throw new Error(`Failed! ${err.message}`);
  }
};
