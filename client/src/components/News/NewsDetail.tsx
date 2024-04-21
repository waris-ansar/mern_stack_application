import React from "react";
import { News } from "../../types/news";
import { useTheme } from "../../contexts/themeContext";
import NewsActions from "./NewsActions";
import Tags from "./Tags";
interface PropsTypes {
  newsDetail: News;
}

const NewsDetail: React.FC<PropsTypes> = ({ newsDetail }) => {
  const { isDark } = useTheme();
  const { _id, comments, likes, message, creator, tags, title, selectedFile } =
    newsDetail;

  return (
    <div>
      <h1 className={`heading-48 ${isDark ? "text-white" : "text-gray-900"}`}>
        {title}
      </h1>
      <div className="mt-8">
        <img
          src={selectedFile}
          alt={title}
          className="w-full min-h-[24rem] h-auto"
        />
      </div>

      <NewsActions likes={likes} comments={comments} />

      <div className="mt-2">
        <div className="">
          <Tags tags={tags} />
        </div>
      </div>
      <p
        className={`mt-4 pr-5 mb-6 para-20 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {message}
      </p>
    </div>
  );
};

export default NewsDetail;
