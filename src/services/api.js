import axios from "axios";
require("dotenv").config();

const tokenClimatempo = process.env.REACT_APP_KEY_CLIMATEMPO;
const tokenOpenWeather = process.env.REACT_APP_KEY_OPENWEATHER;

const apiClimaTempo = axios.create({
  baseURL: `http://apiadvisor.climatempo.com.br/api/v1`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  params: { token: tokenClimatempo },
});

const apiOpenWeather = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  params: { appid: tokenOpenWeather },
});

export { apiClimaTempo, apiOpenWeather };
