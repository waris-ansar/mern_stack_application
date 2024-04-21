import React from "react";
import { useTheme } from "../../contexts/themeContext";
import { ThumbsUp, Chat } from "@phosphor-icons/react";
import { useAppSelector } from "../../redux";
import { toast } from "react-toastify";
import { toastOptions } from "../../constants/theme";
import { Comment } from "../../types/news";

interface PropsTypes {
  likes: string[];
  comments: Comment[];
}

const NewsActions: React.FC<PropsTypes> = ({ likes, comments }) => {
  const { isDark } = useTheme();
  const { authenticated } = useAppSelector((state) => state.user);

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
    <div className="w-full h-8 flex items-center py-6 px-2 gap-10">
      <div className="flex items-center gap-2 cursor-pointer">
        <ThumbsUp
          size={28}
          color={isDark ? "#fff" : "#111827"}
          onClick={handleLike}
        />
        <p className={`para-16 ${isDark ? "text-white" : "text-gray-900"}`}>
          {likes?.length}
        </p>
      </div>
      <div className="flex items-center gap-2 cursor-pointer">
        <Chat
          size={28}
          color={isDark ? "#fff" : "#111827"}
          onClick={handleComment}
        />
        <p className={`para-16 ${isDark ? "text-white" : "text-gray-900"}`}>
          {comments?.length}
        </p>
      </div>
    </div>
  );
};

export default NewsActions;
