import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { signIn, signUp } from "../api-thunk/user";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    isFetching: false,
    user: {},
    authenticated: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        localStorage.setItem("user", JSON.stringify(action.payload));
        state.user = action.payload;
        state.authenticated = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(signUp.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        localStorage.setItem("user", JSON.stringify(action.payload));
        state.user = action.payload;
        state.authenticated = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;
