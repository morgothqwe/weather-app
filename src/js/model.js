import { API_KEY } from "./config";

export const weatherCondition = async function () {
  await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current=temperature_2m,relative_humidity_2m,wind_speed_10m,pressure_msl`
  )
    .then(function (response) {
      return response.json(); // ✅ Return the parsed JSON
    })
    .then(function (data) {
      console.log(data); // ✅ Now 'data' contains the API response
    })
    .catch(function (error) {
      console.error("API call failed:", error);
    });
};
