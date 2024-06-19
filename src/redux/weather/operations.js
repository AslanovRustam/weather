import { createAsyncThunk } from "@reduxjs/toolkit";
import { getWeather, getWeatherForecast } from "../../services/openWeatherMap";

export const fetchWeatherByLocation = createAsyncThunk(
  "location/fetchWeatherByLocation",
  async (coords, thunkAPI) => {
    const state = thunkAPI.getState();
    const { lat, lon } = state.location;
    if (lat && lon) {
      return thunkAPI.rejectWithValue("We already have location!");
    }

    try {
      const { data } = await getWeather(coords.lat, coords.lon);
      return {
        temp: data?.main?.temp,
        feels: data?.main?.feels_like,
        humidity: data?.main?.humidity,
        pressure: data?.main?.pressure,
        weather: {
          id: data?.weather[0]?.id,
          description: data?.weather[0]?.description,
          icon: data?.weather[0]?.icon,
          main: data?.weather[0]?.main,
        },
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchWeatherForecast = createAsyncThunk(
  "location/fetchWeatherForecast",
  async (coords, thunkAPI) => {
    try {
      const { data } = await getWeatherForecast(coords.lat, coords.lon);
      return data.list;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
