import React from "react";
import { ArrowRight } from "@phosphor-icons/react";
import moment from "moment";
import { useTheme } from "../../contexts/themeContext";
import { truncateMessage } from "../../helpers/global";
import { News } from "../../types/news";
import { Link } from "react-router-dom";
interface PropsType {
  newsData: News;
}

const Card: React.FC<PropsType> = ({ newsData }) => {
  const { isDark } = useTheme();
  const { createdAt, message, creator, _id, selectedFile: image } = newsData;

  return (
    <div>
      <div className="img-container h-48">
        <img src={image} alt="post-img" className="w-full h-48" />
      </div>
      <div className="content-container">
        <h4
          className={`para-16 mt-1 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          {/* 24 March, 2024 */}
          {moment(createdAt).format("DD MMMM, YYYY")}
        </h4>
        <p
          className={`para-20 mt-2 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          {truncateMessage(message, 70)}
        </p>
        <div className="flex justify-between items-center">
          <h6
            className={`heading-12 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            {`Created by: ${creator.name}`}
          </h6>
          <Link to={`/news/${_id}`}>
            <div
              className={`mt-3 flex justify-center items-center w-7 h-7 border rounded-md cursor-pointer ${
                isDark ? "border-white" : "border-gray-900"
              }`}
            >
              <ArrowRight size={20} color={`${isDark ? "#fff" : "#111827"}`} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
