import { createSlice } from "@reduxjs/toolkit";

export const resultSlice = createSlice({
  name: "apiAnswer",
  initialState: {
    answer: [],
  },
  reducers: {
    updateResult: (state, action: { payload: string }) => {
      const text = action.payload;
      const cleanedText = text.match(/```json\n?(.*?)\n?```/s);

      if (cleanedText && cleanedText[1]) {
        const jsonResult = cleanedText[1].trim();
        state.answer = JSON.parse(jsonResult);
      } else {
        state.answer = [];
      }
    },
    resetResult: (state) => {
      state.answer = [];
    },
  },
});

export const { updateResult, resetResult } = resultSlice.actions;

export default resultSlice.reducer;
