const data = {
  lat: -23.52,
  lon: -47.43,
  timezone: "America / Sao_Paulo",
  timezone_offset: -10800,
  current: {
    dt: 1603284828,
    sunrise: 1603269070,
    sunset: 1603315023,
    temp: 24,
    feels_like: 25.3,
    pressure: 1020,
    humidity: 69,
    dew_point: 17.96,
    uvi: 13.42,
    clouds: 75,
    visibility: 8000,
    wind_speed: 2.1,
    wind_deg: 220,

    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d",
      },
      {
        id: 804,
        main: "Clouds",
        description: "test",
        icon: "04d",
      },
    ],
  },
};

const {
  lat,
  lon,
  current: {
    weather: [{ description }],
  },
} = data;
console.log(lat, description);

console.log(new Date(1603281600 * 1000));
console.log(new Date(1603285200 * 1000));
console.log(new Date(1603288800 * 1000));
