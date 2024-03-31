import React, { useState, useEffect } from "react";
import WelocmeModal from "../components/modals/WelcomeModal";
import { useAppDispatch } from "../redux";
import Card from "../components/home/Card";
import { useTheme } from "../contexts/themeContext";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isDark } = useTheme();
  const [showModal, setShowModal] = useState<boolean>(false);

  // todo uncomment this code
  // useEffect(() => {
  //   const tenSecondTimer = setTimeout(() => {
  //     setShowModal(true);
  //   }, 10000);

  //   return () => clearTimeout(tenSecondTimer);
  // }, []);

  return (
    <div className={`${isDark ? "bg-darkBlue" : "bg-white"}`}>
      <div className="container mx-auto text-center py-10">
        <h1 className={`heading-36 ${isDark ? "text-white" : "text-gray-900"}`}>
          Live with Mern
        </h1>
        <p
          className={`mt-2 para-20 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          Be aware of the latest what's going in world
        </p>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-x-12 gap-y-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      {showModal && <WelocmeModal showModal={showModal} />}
    </div>
  );
};

export default Home;
