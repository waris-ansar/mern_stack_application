import React from "react";
import { News } from "../../types/news";
import { useTheme } from "../../contexts/themeContext";
import { ThumbsUp, Chat } from "@phosphor-icons/react";
import { useAppSelector } from "../../redux";
import { toast } from "react-toastify";
import { toastOptions } from "../../constants/theme";
import Tags from "./Tags";
interface PropsTypes {
  newsDetail: News;
}

const NewsDetail: React.FC<PropsTypes> = ({ newsDetail }) => {
  const { isDark } = useTheme();
  const { authenticated } = useAppSelector((state) => state.user);
  const { _id, comments, likes, message, creator, tags, title, selectedFile } =
    newsDetail;

  //   handling like and comment
  const handleLike = () => {
    if (!authenticated) {
      toast.info(`You must login to like this post`, toastOptions);
      return;
    }
    toast.info(`Post is liked successfully`, toastOptions);
  };
  const handleComment = () => {
    if (!authenticated) {
      toast.info(`You must login to comment on this post`, toastOptions);
      return;
    }
    toast.info(`Post is liked successfully`, toastOptions);
  };

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
      <div className="w-full h-8 flex items-center py-6 px-2 gap-10">
        <div className="flex items-center gap-2 cursor-pointer">
          <ThumbsUp
            size={28}
            color={isDark ? "#fff" : "#111827"}
            onClick={handleLike}
          />
          <p className={`para-16 ${isDark ? "text-white" : "text-gray-900"}`}>
            10
          </p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Chat
            size={28}
            color={isDark ? "#fff" : "#111827"}
            onClick={handleComment}
          />
          <p className={`para-16 ${isDark ? "text-white" : "text-gray-900"}`}>
            3
          </p>
        </div>
      </div>
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
