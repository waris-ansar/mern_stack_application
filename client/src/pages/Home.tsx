import React, { useState, useEffect } from "react";
import WelocmeModal from "../components/modals/WelcomeModal";
import { useAppDispatch, useAppSelector } from "../redux";
import Card from "../components/home/Card";
import { useTheme } from "../contexts/themeContext";
import { getNews } from "../redux/api-thunk/news";
import { GetNewsParams, NewsResponse, News } from "../types/news";
const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    isLoading,
    news,
    totalCount,
    hasNextPage,
    hasPreviousPage,
  }: NewsResponse = useAppSelector((state) => state.news);

  const { isDark } = useTheme();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [params, setParams] = useState<GetNewsParams>({
    page: 1,
    limit: 10,
  });

  useEffect(() => {
    const tenSecondTimer = setTimeout(() => {
      setShowModal(true);
    }, 10000);

    return () => clearTimeout(tenSecondTimer);
  }, []);

  useEffect(() => {
    dispatch(getNews(params));
  }, []);

  return (
    <div className={`${isDark ? "bg-darkBlue" : "bg-white"}`}>
      <div className="container mx-auto text-center py-10">
        <h1 className={`heading-36 ${isDark ? "text-white" : "text-gray-900"}`}>
          Live with Mern
        </h1>
        <p
          className={`mt-2 para-20 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          Be aware of the latest what's going in world
        </p>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-x-12 gap-y-10">
          {news.length > 0 ? (
            news.map((item: News) => {
              return <Card key={item._id} newsData={item} />;
            })
          ) : (
            <h3 className="heading-16 text-center py-10">
              No news are available
            </h3>
          )}
        </div>
      </div>

      {showModal && <WelocmeModal showModal={showModal} />}
    </div>
  );
};

export default Home;
