import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../helpers";

// get news with search an pagniation
export const getNews = createAsyncThunk(
  "getnews/all-news",
  async (params: any, thunkAPI) => {
    const response = await axiosRequest.get("posts", params);
    return response.data as any;
  }
);
