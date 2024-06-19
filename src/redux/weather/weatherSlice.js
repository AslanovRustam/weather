import { createSlice } from "@reduxjs/toolkit";
import {
  fetchWeatherByLocation,
  fetchWeatherByName,
  fetchWeatherForecast,
} from "./operations";

const initialState = {
  currentWeather: {},
  forecast: [],
  isLoading: false,
  isError: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(fetchWeatherByLocation.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchWeatherByLocation.fulfilled, (state, { payload }) => {
        state.currentWeather = payload;
      })
      .addCase(fetchWeatherByLocation.rejected, (state, { payload }) => {
        state.currentWeather = {};
        state.isError = payload;
        state.isLoading = false;
      })
      .addCase(fetchWeatherForecast.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchWeatherForecast.fulfilled, (state, { payload }) => {
        state.forecast = payload;
      })
      .addCase(fetchWeatherForecast.rejected, (state, { payload }) => {
        state.forecast = [];
        state.isError = payload;
        state.isLoading = false;
      })
      .addCase(fetchWeatherByName.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchWeatherByName.fulfilled, (state, { payload }) => {
        state.currentWeather = payload;
      })
      .addCase(fetchWeatherByName.rejected, (state, { payload }) => {
        state.currentWeather = {};
        state.isError = payload;
        state.isLoading = false;
      }),
});

export const weatherReducer = weatherSlice.reducer;
