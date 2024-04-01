import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "../api-thunk/news";

const newsSlice = createSlice({
  name: "news-data",
  initialState: {
    isLoading: false,
    isFetching: false,
    news: [],
    totalCount: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload.data;
        state.totalCount = action.payload.totalCount;
        state.hasNextPage = action.payload.hasNextPage;
        state.hasPreviousPage = action.payload.hasPreviousPage;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.isFetching = false;
      });
  },
});

export const {} = newsSlice.actions;
export default newsSlice.reducer;
