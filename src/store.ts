import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./apiSlice";

const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
