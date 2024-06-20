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
      .addCase(fetchWeatherByLocation.fulfilled, (state, { payload }) => {
        state.currentWeather = payload;
        state.forecast = [];
      })
      .addCase(fetchWeatherByLocation.rejected, (state, { payload }) => {
        state.currentWeather = {};
        state.forecast = [];
        state.isError = payload;
        state.isLoading = false;
      })
      .addCase(fetchWeatherForecast.fulfilled, (state, { payload }) => {
        state.forecast = payload;
      })
      .addCase(fetchWeatherForecast.rejected, (state, { payload }) => {
        state.forecast = [];
        state.isError = payload;
        state.isLoading = false;
      })
      .addCase(fetchWeatherByName.fulfilled, (state, { payload }) => {
        state.currentWeather = payload;
        state.forecast = [];
      })
      .addCase(fetchWeatherByName.rejected, (state, { payload }) => {
        state.currentWeather = {};
        state.forecast = [];
        state.isError = payload;
        state.isLoading = false;
      })
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
          state.isError = null;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/fulfilled"),
        (state) => {
          state.isLoading = false;
          state.isError = null;
        }
      ),
});

export const weatherReducer = weatherSlice.reducer;
