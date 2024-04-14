import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../contexts/themeContext";
import { getNewsById } from "../redux/api-thunk/news";
import { useAppDispatch, useAppSelector } from "../redux";
import { NewsResponse } from "../types/news";
import NewsDetail from "../components/News/NewsDetail";

const News: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { isDark } = useTheme();

  const { isLoading, isFetching, newsById }: NewsResponse = useAppSelector(
    (state) => state.news
  );

  useEffect(() => {
    dispatch(getNewsById(id as string));
  }, [id]);

  return (
    <div
      className={`${isDark ? "bg-darkBlue" : "bg-white"} min-h-screen pt-12`}
    >
      <div className="container mx-auto flex gap-16">
        <div className="main-news-container w-[65%]">
          <NewsDetail newsDetail={newsById} />
        </div>
        <div className="sidebar-news-container w-[35%] h-7 border"></div>
      </div>
    </div>
  );
};

export default News;
