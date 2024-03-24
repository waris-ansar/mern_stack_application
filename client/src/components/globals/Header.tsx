import React, { useEffect } from "react";
import ThemeChanger from "./ThemeChanger";
import { useTheme } from "../../contexts/themeContext";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div>
      <div
        className={`${
          isDark ? "bg-darkBlue" : "bg-transparent"
        } h-full flex items-center px-6 py-6`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div
            className={`${
              isDark ? "text-white" : "text-darkBlue"
            } text-3xl font-poppins font-semibold`}
          >
            MernNews
          </div>

          <div className="flex gap-5 items-center">
            <Link to="/sign-in">
              <button
                className={`${
                  isDark ? "btn-primary-dark" : "btn-primary-light"
                }`}
              >
                Sign in
              </button>
            </Link>
            <Link to="/sign-up">
              <button
                className={`${
                  isDark ? "btn-secondary-dark" : "btn-secondary-light"
                }`}
              >
                Sign up
              </button>
            </Link>
            <ThemeChanger />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
