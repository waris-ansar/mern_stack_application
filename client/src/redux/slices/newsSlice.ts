import { createSlice } from "@reduxjs/toolkit";
import { getNews, getNewsById, getRelatedPost } from "../api-thunk/news";

const newsSlice = createSlice({
  name: "news-data",
  initialState: {
    isLoading: false,
    isFetching: false,
    news: [],
    relatedNews: [],
    newsById: {},
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
      })

      // getting particular news
      .addCase(getNewsById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getNewsById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newsById = action.payload.data;
      })
      .addCase(getNewsById.rejected, (state, action) => {
        state.isLoading = false;
        state.newsById = {};
      })

      // getting related news
      .addCase(getRelatedPost.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getRelatedPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedNews = action.payload.data;
      })
      .addCase(getRelatedPost.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedNews = [];
      });
  },
});

export const {} = newsSlice.actions;
export default newsSlice.reducer;
