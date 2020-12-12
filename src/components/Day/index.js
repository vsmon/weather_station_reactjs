import React from "react";
import {
  Day,
  TextDay,
  ImgDay,
  SunRiseContainer,
  ImgSunRise,
  SunRise,
  SunSet,
} from "./styles";
import moment from "moment";

const DayForecast = ({ data }) => {
  const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <Day>
      <TextDay>{week[new Date(data.weeklyDate).getDay()]}</TextDay>
      <ImgDay src={data.urlIconWeekly}></ImgDay>
      <TextDay>
        Max {data.weeklyTempMax}º Min {data.weeklyTempMin}º
      </TextDay>
      <SunRiseContainer>
        <SunRise>
          <ImgSunRise src={"http://openweathermap.org/img/wn/01d@2x.png"} />{" "}
          <TextDay>{moment(new Date(data.dateSunrise)).format("LT")}</TextDay>
        </SunRise>
        <SunSet>
          <ImgSunRise src={"http://openweathermap.org/img/wn/01n@2x.png"} />{" "}
          <TextDay>{moment(new Date(data.dateSunset)).format("LT")}</TextDay>
        </SunSet>
      </SunRiseContainer>
    </Day>
  );
};

export default DayForecast;
