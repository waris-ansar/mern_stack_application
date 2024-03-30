import React from "react";
import { useTheme } from "../contexts/themeContext";
import SignupForm from "../components/auth/SignupForm";

const Signup: React.FC = () => {
  const { isDark } = useTheme();

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
          Sign up to continue <br></br> your journey
        </h1>
        <div className="mt-8">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
