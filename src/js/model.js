import { API_KEY } from "./config";

export const weatherCondition = async function (city) {
  const geoResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  const geoData = await geoResponse.json();

  return {
    temperature: geoData.main.temp,
    humidity: geoData.main.humidity,
    pressure: geoData.main.pressure,
    wind: geoData.wind.speed,
  };
};
