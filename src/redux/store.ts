import { configureStore } from "@reduxjs/toolkit";
import resultSlice from "./resultSlice";
import errorSlice from "./errorSlice";

export const store = configureStore({
  reducer: {
    apiAnswer: resultSlice,
    sliceError: errorSlice,
  },
});

export type rootState = ReturnType<typeof store.getState>;
