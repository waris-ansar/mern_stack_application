import React from "react";
import { ArrowRight } from "@phosphor-icons/react";
import moment from "moment";
import { useTheme } from "../../contexts/themeContext";
import { truncateMessage } from "../../helpers/global";
const Card: React.FC = () => {
  const { isDark } = useTheme();
  const message = "Lorem ipsum dolor sit";

  return (
    <div>
      <div className="img-container">
        <img
          src={
            "https://images.unsplash.com/photo-1594136662380-3580470c089d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="post-img"
        />
      </div>
      <div className="content-container">
        <h4
          className={`para-16 mt-1 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          24 March, 2024
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
            Created by
          </h6>
          <div
            className={`mt-3 flex justify-center items-center w-7 h-7 border rounded-md cursor-pointer ${
              isDark ? "border-white" : "border-gray-900"
            }`}
          >
            <ArrowRight size={20} color={`${isDark ? "#fff" : "#111827"}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
