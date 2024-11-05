import { createSlice } from "@reduxjs/toolkit";

export const resultSlice = createSlice({
  name: "apiAnswer",
  initialState: {
    answer: [],
  },
  reducers: {
    updateResult: (state, action: { payload: string }) => {
      const text = action.payload;
      if (text.startsWith("```json") && text.endsWith("````")) {
        const cleanedText = text.replace(/^```json\s*|\s*```$/g, "");
        state.answer = JSON.parse(cleanedText);
      }
    },
  },
});

export const { updateResult } = resultSlice.actions;

export default resultSlice.reducer;
