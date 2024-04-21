import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../contexts/themeContext";
import { getNewsById } from "../redux/api-thunk/news";
import { useAppDispatch, useAppSelector } from "../redux";
import { NewsResponse } from "../types/news";
import NewsDetail from "../components/News/NewsDetail";
import RelatedNews from "../components/News/RelatedNews";
import { getRelatedPost } from "../redux/api-thunk/news";

const News: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { isDark } = useTheme();

  const { isLoading, isFetching, newsById }: NewsResponse = useAppSelector(
    (state) => state.news
  );

  useEffect(() => {
    dispatch(getNewsById(id as string));
    dispatch(getRelatedPost(id as string));
  }, [id]);

  return (
    <div
      className={`${isDark ? "bg-darkBlue" : "bg-white"} min-h-screen pt-12`}
    >
      <div className="container mx-auto flex gap-24">
        <div className="main-news-container w-[70%]">
          <NewsDetail newsDetail={newsById} />
        </div>
        <div className="sidebar-news-container w-[30%] ml-10">
          <h3
            className={`heading-36 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Related News
          </h3>
          <div className="mt-8">
            <RelatedNews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
