import { configureStore } from "@reduxjs/toolkit";
import hands from "../slices/handsSlice/handsSlice";

const store = configureStore({
  reducer: { hands },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
