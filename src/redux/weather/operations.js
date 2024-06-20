import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getWeather,
  getWeatherByName,
  getWeatherForecast,
} from "../../services/openWeatherMap";

export const fetchWeatherByLocation = createAsyncThunk(
  "weather/fetchWeatherByLocation",
  async (coords, thunkAPI) => {
    try {
      const { data } = await getWeather(coords.lat, coords.lon);
      return {
        name: data?.name,
        temp: data?.main?.temp,
        feels: data?.main?.feels_like,
        humidity: data?.main?.humidity,
        pressure: data?.main?.pressure,
        weather: [...data?.weather],
        wind: data?.wind?.speed,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchWeatherByName = createAsyncThunk(
  "weather/fetchWeatherByName",
  async (name, thunkAPI) => {
    try {
      const { data } = await getWeatherByName(name);
      return {
        name: data?.name,
        temp: data?.main?.temp,
        feels: data?.main?.feels_like,
        humidity: data?.main?.humidity,
        pressure: data?.main?.pressure,
        weather: [...data?.weather],
        wind: data?.wind?.speed,
      };
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.message);
      let errorMessage = "An error occurred";
      if (error.response && error.response.data) {
        if (error.response.data.message) {
          errorMessage = error.response.data.message;
        } else {
          errorMessage = JSON.stringify(error.response.data);
        }
      } else if (error.message) {
        errorMessage = error.message;
      }

      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const fetchWeatherForecast = createAsyncThunk(
  "weather/fetchWeatherForecast",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const {
      currentWeather: { name },
    } = state.weather;

    try {
      const { data } = await getWeatherForecast(name);
      return data.list;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// const state = thunkAPI.getState();
// const { city } = state.location;
// if (city) {
//   return thunkAPI.rejectWithValue("Wrong city name!");
// }
