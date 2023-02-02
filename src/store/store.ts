import { configureStore } from "@reduxjs/toolkit";
import hands from "../slices/handsSlice/handsSlice";

const store = configureStore({
  reducer: { hands },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
