import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationState: true,
  city: "",
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, { payload }) => {
      state.locationState = payload;
    },
    setCity: (state, { payload }) => {
      state.city = payload;
    },
  },
});

export const { setLocation, setCity } = locationSlice.actions;

export const locationReducer = locationSlice.reducer;
