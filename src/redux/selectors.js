export const selectCurrentWeather = (state) => state.weather.currentWeather;
export const selectCurrentLocation = (state) =>
  state.weather.currentWeather.name;
export const selectForecast = (state) => state.weather.forecast;
export const selectIsloading = (state) => state.weather.isLoading;
export const selectIserror = (state) => state.weather.isError;
export const selectCanUseLocation = (state) => state.location.locationState;
