import { configureStore } from "@reduxjs/toolkit";
import resultSlice from "./resultSlice";

export const store = configureStore({
  reducer: {
    apiAnswer: resultSlice,
  },
});

export type rootState = ReturnType<typeof store.getState>;
