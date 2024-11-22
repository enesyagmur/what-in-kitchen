import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "sliceUser",
  initialState: {
    user: {},
  },
  reducers: {
    updateUser: (state, action: { payload: object }) => {
      state.user = action.payload;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
