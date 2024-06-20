import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectForecast } from "../../redux/selectors";
import { fetchWeatherForecast } from "../../redux/weather/operations";
import s from "./weatherForecast.module.css";

function WeatherForecast() {
  const forecast = useSelector(selectForecast);
  const dispatch = useDispatch();

  const getForecast = () => {
    dispatch(fetchWeatherForecast());
  };
  console.log(forecast);
  return (
    <>
      <button className={s.btn} type="button" onClick={getForecast}>
        get forecast
      </button>
      <table className={s.table}></table>
    </>
  );
}

export default WeatherForecast;
