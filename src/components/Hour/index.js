import React from "react";
import { Hour, ImgHour, TextHour, TempHour } from "./styles";
import moment from "moment";

const HourForecast = ({ data }) => {
  /* const time = `${new Date(data.date).getMinutes()}:${new Date(
    data.date
  ).getHours()}`; */

  return (
    <Hour>
      <ImgHour src={data.urlIconHourly}></ImgHour>
      <TempHour>
        <TextHour>{data.hourlyTemperature}ºC</TextHour>
        <TextHour>{}</TextHour>
      </TempHour>

      <TextHour>{moment(data.hourlyDate).format("LT")}</TextHour>
    </Hour>
  );
};

export default HourForecast;
