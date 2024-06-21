import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectForecast } from "../../redux/selectors";
import { fetchWeatherForecast } from "../../redux/weather/operations";
import { formatTime, groupDataByDate } from "../../services/helpers";
import { imgUrl } from "../../services/openWeatherMap";
import s from "./weatherForecast.module.css";

function WeatherForecast() {
  const forecast = useSelector(selectForecast);
  const dispatch = useDispatch();

  const getForecast = () => {
    dispatch(fetchWeatherForecast());
  };

  const groupedData = groupDataByDate(forecast);

  console.log(forecast);
  console.log(groupedData);
  return (
    <section className={s.container}>
      <button className={s.btn} type="button" onClick={getForecast}>
        get forecast
      </button>
      {Object.keys(groupedData).map((date) => (
        <div key={date} className={s.wraper}>
          <h2 className={s.date}>{date}</h2>
          <table className={s.table}>
            <thead>
              <tr>
                <th className={s.thead}>Time</th>
                <th className={s.thead}>Temperature</th>
                <th className={s.thead}>Humidity</th>
                <th className={s.thead}>Pressure</th>
                <th className={s.thead}>Wind Speed</th>
                <th className={s.thead}>Sky</th>
              </tr>
            </thead>
            <tbody>
              {groupedData[date].map((item) => (
                <tr key={item.dt}>
                  <td className={s.td}>{formatTime(item.dt_txt)}</td>
                  <td className={s.td}>{Math.round(item.main.temp)}°C</td>
                  <td className={s.td}>{item.main.humidity}%</td>
                  <td className={s.td}>{item.main.pressure}mm</td>
                  <td className={s.td}>{item.wind.speed}m/s</td>
                  <td className={s.td}>
                    <img
                      className={s.icon}
                      src={imgUrl(item.weather[0].icon)}
                      alt={item.weather[0].description}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </section>
  );
}

export default WeatherForecast;
