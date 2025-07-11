import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/count/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
