import axios from "axios";

const API_KEY = "f2a489d24fd49ea2a09c68f887ca44bb";

export const getWeather = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const response = await axios.get(url);

  return { ...response };
};

export const getWeatherForecast = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const response = await axios.get(url);

  return { ...response };
};
