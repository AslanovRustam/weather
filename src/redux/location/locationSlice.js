import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationState: true,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, { payload }) => {
      state.locationState = payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;

export const locationReducer = locationSlice.reducer;
