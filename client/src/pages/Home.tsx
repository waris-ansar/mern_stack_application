import React, { useState, useEffect } from "react";
import WelocmeModal from "../components/modals/WelcomeModal";
import { useAppDispatch } from "../redux";
const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const tenSecondTimer = setTimeout(() => {
      setShowModal(true);
    }, 10000);

    return () => clearTimeout(tenSecondTimer);
  }, []);

  return <div>{showModal && <WelocmeModal showModal={showModal} />} </div>;
};

export default Home;
