import React, { useEffect, useState } from "react";
import {
  Container,
  Location,
  MainTemp,
  CurrentTemp,
  DailyForecast,
  WeekForecast,
  Temperature,
  TempImg,
  TempText,
  DetailTemp,
  TextDetail,
} from "./styles";

import moment from "moment";

import HourForecast from "../../components/Hour";
import DayForecast from "../../components/Day";
import { apiClimaTempo, apiOpenWeather } from "../../services/api";

import { data } from "../../utils/data";

export default function Home() {
  const [dailyForecast, setDailyForecast] = useState([]);
  const [weeklyForecast, setWeeklyForecast] = useState([]);
  const [infoLocale, setInfoLocale] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});
  const [position, setPosition] = useState({
    lat: "-23.506085",
    lon: "-47.454214",
  });

  useEffect(() => {
    //getForecast();

    dataTest();
  }, []);

  const dataTest = () => {
    const resp = { data };
    const urlCurrentIcon = `http://openweathermap.org/img/wn/${resp.data.current.weather[0].icon}@2x.png`;
    const {
      current: {
        weather: [{ description }],
      },
      current: { temp: CurrentTemperature },
      current: { humidity },
      current: { wind_speed },
      current: { feels_like },
    } = resp.data;

    setCurrentWeather({
      urlCurrentIcon,
      description,
      CurrentTemperature,
      humidity,
      wind_speed,
      feels_like,
    });

    const { hourly, daily } = resp.data;

    const convertTimeStamp = (timestamp) => new Date(timestamp * 1000);

    const dailyForecast = [];
    hourly.map((item) => {
      const {
        dt: date,
        temp: hourlyTemperature,
        weather: [{ icon: iconHourly }],
      } = item;
      const urlIconHourly = `http://openweathermap.org/img/wn/${iconHourly}@2x.png`;
      const hourlyDate = convertTimeStamp(date);
      dailyForecast.push({ hourlyDate, hourlyTemperature, urlIconHourly });
    });
    setDailyForecast(dailyForecast);

    const weeklyForeacast = [];
    daily.map((item) => {
      const {
        dt: date,
        temp: { max: weeklyTempMax, min: weeklyTempMin },
        weather: [{ icon: iconWeekly }],
        sunrise: weeklySunrise,
        sunset: weeklySunset,
      } = item;
      const urlIconWeekly = `http://openweathermap.org/img/wn/${iconWeekly}@2x.png`;
      const dateSunrise = new Date(weeklySunrise * 1000);
      const dateSunset = new Date(weeklySunset * 1000);
      const weeklyDate = new Date(date * 1000);
      weeklyForeacast.push({
        weeklyDate,
        weeklyTempMax,
        weeklyTempMin,
        urlIconWeekly,
        dateSunrise,
        dateSunset,
      });
    });
    setWeeklyForecast(weeklyForeacast);
    setInfoLocale({ name: "Sorocaba", state: "SP", country: "Brasil" });
  };

  const getPosition = () => {
    navigator.geolocation.getCurrentPosition((coordinates) => {
      const lat = coordinates.coords.latitude;
      const lon = coordinates.coords.longitude;
      setPosition({ lat, lon });
    });
  };
  const getForecast = async () => {
    const resp = await apiOpenWeather.get(`/onecall`, {
      params: {
        lat: position.lat /* "-23.506085" */,
        lon: position.lon /* "-47.454214" */,
        exclude: "",
        units: "metric",
      },
    });

    const urlCurrentIcon = `http://openweathermap.org/img/wn/${resp.data.current.weather[0].icon}@2x.png`;
    const {
      current: {
        weather: [{ description }],
      },
      current: { temp: CurrentTemperature },
      current: { humidity },
      current: { wind_speed },
      current: { feels_like },
    } = resp.data;

    setCurrentWeather({
      urlCurrentIcon,
      description,
      CurrentTemperature,
      humidity,
      wind_speed,
      feels_like,
    });

    const { hourly, daily } = resp.data;

    const convertTimeStamp = (timestamp) => new Date(timestamp * 1000);

    const dailyForecast = [];
    hourly.map((item) => {
      const {
        dt: date,
        temp: hourlyTemperature,
        weather: [{ icon: iconHourly }],
      } = item;
      const urlIconHourly = `http://openweathermap.org/img/wn/${iconHourly}@2x.png`;
      const hourlyDate = convertTimeStamp(date);
      dailyForecast.push({ hourlyDate, hourlyTemperature, urlIconHourly });
    });
    setDailyForecast(dailyForecast);

    const weeklyForeacast = [];
    daily.map((item) => {
      const {
        dt: date,
        temp: { max: weeklyTempMax, min: weeklyTempMin },
        weather: [{ icon: iconWeekly }],
        sunrise: weeklySunrise,
        sunset: weeklySunset,
      } = item;
      const urlIconWeekly = `http://openweathermap.org/img/wn/${iconWeekly}@2x.png`;
      const dateSunrise = new Date(weeklySunrise * 1000);
      const dateSunset = new Date(weeklySunset * 1000);
      const weeklyDate = new Date(date * 1000);
      weeklyForeacast.push({
        weeklyDate,
        weeklyTempMax,
        weeklyTempMin,
        urlIconWeekly,
        dateSunrise,
        dateSunset,
      });
    });
    setWeeklyForecast(weeklyForeacast);
    setInfoLocale({ name: "Sorocaba", state: "SP", country: "Brasil" });
  };

  return (
    <Container>
      <Location>
        <h3>
          {infoLocale.name}, {infoLocale.state}, {infoLocale.country}
        </h3>
        <h3>{moment(new Date()).format("LLL")}</h3>
      </Location>

      <MainTemp>
        <Temperature>
          <CurrentTemp>
            <TempImg src={currentWeather.urlCurrentIcon}></TempImg>
            <h3>{currentWeather.description}</h3>
          </CurrentTemp>

          <TempText>{currentWeather.CurrentTemperature}ºC</TempText>
        </Temperature>

        <DetailTemp>
          <TextDetail>Humidity: {currentWeather.humidity}%</TextDetail>
          <TextDetail>Wind: {currentWeather.wind_speed} km/h</TextDetail>
          <TextDetail>Feels Like: {currentWeather.feels_like}ºC</TextDetail>
        </DetailTemp>
      </MainTemp>

      <DailyForecast>
        {dailyForecast.slice(0, 7).map((item, index) => {
          return <HourForecast key={index} data={item} />;
        })}
      </DailyForecast>

      <WeekForecast>
        {weeklyForecast.slice(0, 7).map((item, index) => {
          return <DayForecast key={index} data={item} />;
        })}
      </WeekForecast>
    </Container>
  );
}
