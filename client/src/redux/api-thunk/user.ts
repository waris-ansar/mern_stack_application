import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../helpers";
import { signInPayload, signUpPayload } from "../../types/auth";

// sign in user
export const signIn = createAsyncThunk(
  "users/sign-in",
  async (payload: signInPayload, thunkAPI) => {
    const response = await axiosRequest.post(
      "users/sign-in",
      payload,
      "User Found!"
    );
    return response.data;
  }
);

// sign up user
export const signUp = createAsyncThunk(
  "users/sign-up",
  async (payload: signUpPayload, thunkAPI) => {
    const response = await axiosRequest.post(
      "users/sign-up",
      payload,
      "new account created"
    );
    return response.data;
  }
);

//get user by id
export const getUser = createAsyncThunk(
  "users/get-user",
  async (id: string, thunkAPI) => {
    const response = await axiosRequest.get(`users/${id}`);
    return response.data;
  }
)