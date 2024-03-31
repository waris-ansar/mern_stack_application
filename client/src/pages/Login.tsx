import React, { useEffect } from "react";
import { useTheme } from "../contexts/themeContext";
import LoginForm from "../components/auth/LoginForm";
import { useNavigate } from "react-router";
import { useAppSelector } from "../redux";

const Login: React.FC = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const { authenticated } = useAppSelector((state) => state.user);
  useEffect(() => {
    if (authenticated) {
      navigate("/");
    }
  }, [authenticated]);

  return (
    <div
      className={`h-screen w-full flex justify-center items-center ${
        isDark ? "bg-darkBlue" : "bg-white"
      }`}
      style={{ height: "calc(100vh - 104px)" }}
    >
      <div
        className={`w-[90%] max-w-[35rem] rounded-2xl shadow-sm px-5 py-10 text-center ${
          isDark ? "bg-lightBlue" : "bg-gray-200"
        }`}
      >
        <h1 className={`heading-28 ${isDark ? "text-white" : "text-gray-900"}`}>
          Login to <br></br> enjoy mern
        </h1>
        <div className="mt-8">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
