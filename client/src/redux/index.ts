import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import userReducer from "./slices/userSlice";
import newsReducer from "./slices/newsSlice";
import type { TypedUseSelectorHook } from "react-redux";

const store = configureStore({
  reducer: {
    user: userReducer,
    news: newsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<any> = useSelector;

export default store;
