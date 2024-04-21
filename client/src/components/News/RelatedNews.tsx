import React from "react";
import { useAppSelector } from "../../redux";
import { News } from "../../types/news";
import { truncateMessage } from "../../helpers/global";
import { useTheme } from "../../contexts/themeContext";
import { Link } from "react-router-dom";

const RelatedNews: React.FC = () => {
  const { isDark } = useTheme();
  const relatedNews: News[] = useAppSelector((state) => state.news.relatedNews);

  console.log(relatedNews, "this is the related news....");

  return (
    <div>
      {relatedNews.length > 0 ? (
        relatedNews.map((news: News) => {
          return (
            <Link to={`/news/${news?._id}`}>
              <div className="flex items-start gap-6 mt-4" key={news?._id}>
                <div className="w-32 h-20 rounded-lg">
                  <img
                    src={news?.selectedFile}
                    alt={news?.name}
                    className="rounded-lg w-full h-full"
                  />
                </div>
                <div>
                  <h3
                    className={`heading-16 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {news?.name}
                  </h3>
                  <p
                    className={`para-16 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {truncateMessage(news?.message, 65)}
                  </p>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <div>No related news found</div>
      )}
    </div>
  );
};

export default RelatedNews;
