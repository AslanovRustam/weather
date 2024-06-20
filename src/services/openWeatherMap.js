import axios from "axios";

const API_KEY = "f2a489d24fd49ea2a09c68f887ca44bb";
axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5/";

export const imgUrl = (code) =>
  `https://openweathermap.org/img/wn/${code}@2x.png`;

export const getWeather = async (lat, lon) => {
  const url = `weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const response = await axios.get(url);

  return { ...response };
};

export const getWeatherForecast = async (cityName) => {
  const url = `forecast?q=${cityName}&appid=${API_KEY}&units=metric`;
  const response = await axios.get(url);

  return { ...response };
};

export const getWeatherByName = async (cityName) => {
  const url = `weather?q=${cityName}&appid=${API_KEY}&units=metric`;
  const response = await axios.get(url);

  return { ...response };
};
