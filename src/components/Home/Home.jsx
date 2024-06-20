import React from "react";
import FormComponent from "../Form/Form";
import WeatherCard from "../Card/WeatherCard";
import { useSelector } from "react-redux";
import {
  selectCurrentWeather,
  selectIserror,
  selectIsloading,
} from "../../redux/selectors";
import Loader from "../Loader/Loader";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import WeatherForecast from "../WeatherForecast/WeatherForecast";

function Home() {
  const isError = useSelector(selectIserror);
  const isLoading = useSelector(selectIsloading);
  const weather = useSelector(selectCurrentWeather);

  return (
    <>
      <FormComponent />
      {isError && <ErrorComponent error={isError} />}
      {isLoading && <Loader />}
      <WeatherCard weather={weather} isLoading={isLoading} />
      <WeatherForecast />
    </>
  );
}

export default Home;
