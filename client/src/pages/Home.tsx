import React, { useState, useEffect } from "react";
import WelocmeModal from "../components/modals/WelcomeModal";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const tenSecondTimer = setTimeout(() => {
      setShowModal(true);
    }, 10000);

    return () => clearTimeout(tenSecondTimer);
  }, []);

  return <div>{showModal && <WelocmeModal showModal={showModal} />}</div>;
};

export default Home;
