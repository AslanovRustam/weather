import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { weatherReducer } from "./weather/weatherSlice";
import { locationReducer } from "./location/locationSlice";

const persistConfig = {
  key: "location",
  storage,
};

const persistedReducer = persistReducer(persistConfig, locationReducer);

export const store = configureStore({
  reducer: { location: persistedReducer, weather: weatherReducer },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
