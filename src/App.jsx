import "modern-normalize/modern-normalize.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { fetchWeatherByLocation } from "./redux/weather/operations";
import { setLocation } from "./redux/location/locationSlice";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const success = ({ coords }) => {
      dispatch(
        fetchWeatherByLocation({ lat: coords.latitude, lon: coords.longitude })
      );
      dispatch(setLocation(true));
    };

    const error = () => {
      dispatch(setLocation(false));
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
