import React from "react";
import { useTheme } from "../../contexts/themeContext";
interface propsTypes {
  tags: string[];
}
const Tags: React.FC<propsTypes> = ({ tags }) => {
  const { isDark } = useTheme();

  return (
    <div className="flex gap-3 flex-wrap">
      {tags?.map((tag, index) => {
        return (
          <div
            key={index}
            className={`para-14 px-2 py-2 min-w-12 d-flex-center rounded-full ${
              isDark ? "bg-white text-gray-900" : "bg-gray-900 text-white"
            }`}
          >
            {tag}
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
