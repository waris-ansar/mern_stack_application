import React, { useEffect } from "react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { XCircle } from "@phosphor-icons/react";
import { useTheme } from "../../contexts/themeContext";
import { Link } from "react-router-dom";

interface propTypes {
  showModal: boolean;
}

const WelocmeModal: React.FC<propTypes> = ({ showModal }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { isDark } = useTheme();
  const isMobile = useMediaQuery("(max-width: 40em)");

  useEffect(() => {
    if (showModal) {
      open();
    }
  }, []);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        radius={24}
        size="45%"
        fullScreen={isMobile}
        color="#000"
        closeButtonProps={{
          icon: <XCircle size={28} color={"#fff"} />,
        }}
        className={`${isDark ? "dark" : "light"}`}
      >
        <div className="text-center px-5">
          <h3 className={`heading-36 text-white`}>Welcome!</h3>
          <p className="para-30 mt-2 text-white">To Mern news</p>

          <div className="mt-10">
            <p className="para-20 text-white">
              To use full power of the mern news sign up. By logging in you can
              create your own news like and comment on ohter persons news also
              can save news to your favourites.
            </p>

            <p className="para-20 text-white mt-4">Create an account now</p>
            <Link to={"/sign-up"}>
              <button className={`btn-bg-white mt-6`}>Sign In</button>
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default WelocmeModal;
