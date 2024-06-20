import React from "react";
import { imgUrl } from "../../services/openWeatherMap";
import s from "./WeatherCard.module.css";

function WeatherCard({ weather }) {
  if (!weather || !weather.weather || weather.weather.length === 0) {
    return;
  }

  return (
    <div className={s.container}>
      <p className={s.name}>{weather.name}</p>
      <div className={s.wraper}>
        <span className={s.temp}>{Math.round(weather.temp)}°C</span>
        <img
          className={s.icon}
          src={imgUrl(weather.weather[0].icon)}
          alt={weather.weather[0].description}
        />
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <p className={s.description}>feels</p>
          <p className={s.value}> {Math.round(weather.feels)}°C</p>
        </li>
        <li className={s.item}>
          <p className={s.description}>humidity</p>
          <p className={s.value}> {weather.humidity}%</p>
        </li>
        <li className={s.item}>
          <p className={s.description}>pressure</p>
          <p className={s.value}> {weather.pressure}mm</p>
        </li>
        <li className={s.item}>
          <p className={s.description}>wind</p>
          <p className={s.value}> {weather.wind} m/s</p>
        </li>
      </ul>
    </div>
  );
}

export default WeatherCard;
