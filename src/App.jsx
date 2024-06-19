import "modern-normalize/modern-normalize.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherByLocation } from "./redux/weather/operations";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const success = ({ coords }) => {
      console.log(coords);
      dispatch(
        fetchWeatherByLocation({ lat: coords.latitude, lon: coords.longitude })
      );
    };

    const error = () => {
      // скорее всего буду сетить что-то, но пока не придумал что
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/forecast" element={<WeatherForecast />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

// 805e4fb8991e473eaf3816ded932bfc3    https://opencagedata.com/dashboard#geocoding буду использовать для получения шираты/долготы из названия города
