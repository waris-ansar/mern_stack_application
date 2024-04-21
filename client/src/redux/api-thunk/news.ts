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

// get news by id 
export const getNewsById = createAsyncThunk("getnew/using-id",
  async(id: string, thunkAPI) => {
    const response = await axiosRequest.get(`posts/${id}`)
    return response.data
  }
)

// get related post 
export const getRelatedPost = createAsyncThunk("getnew/related-news", async(id: string, thunkAPI) => {
  const response = await axiosRequest.get(`posts/related-post/${id}`)
  return response.data
})