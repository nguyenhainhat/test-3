import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    userSignUp: {},
    signUp: false,
  },
  reducers: {
    signUp: (state, action) => {
      state.signUp = action.payload;
    },
    userSignUp: (state, action) => {
      state.userSignUp = action.payload;
    },
  },
});

export const { signUp, userSignUp } = usersSlice.actions;
export default usersSlice.reducer;
