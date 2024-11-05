import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "sliceError",
  initialState: {
    error: "",
  },
  reducers: {
    updateError: (state, action: { payload: string }) => {
      state.error = action.payload;
    },
  },
});

export const { updateError } = errorSlice.actions;

export default errorSlice.reducer;
