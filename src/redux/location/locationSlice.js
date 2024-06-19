import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lat: "",
  lon: "",
  city: "",
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, { payload }) => {
      state.lat = payload.lat;
      state.lon = payload.lon;
    },
    setCity: (state, { payload }) => {
      state.city = payload;
    },
  },
});

export const { setLocation, setCity } = locationSlice.actions;

export const locationReducer = locationSlice.reducer;
