import React, { useEffect } from "react";
import { useColorScheme, useDisclosure } from "@mantine/hooks";
import ThemeChanger from "./ThemeChanger";
import { AppShell, Burger, Button } from "@mantine/core";
import { useTheme } from "../../contexts/themeContext";

const Header: React.FC = () => {
  const [opened, { toggle }] = useDisclosure();
  const { theme } = useTheme();
  const colorScheme = useColorScheme();

  return (
    <div>
      <AppShell
        header={{ height: 80 }}
        padding="10"
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        withBorder={false}
      >
        <AppShell.Header>
          <div
            className={`${
              theme === "dark" ? "bg-black" : "bg-transparent"
            } h-full flex items-center`}
          >
            <div className="container mx-auto flex justify-between items-center">
              <div
                className={`${
                  theme === "dark" ? "text-white" : "text-black"
                } text-3xl`}
              >
                MernNews
              </div>
              <div className="flex gap-5 items-center">
                <ThemeChanger />
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                />
              </div>
            </div>
          </div>
        </AppShell.Header>
      </AppShell>
    </div>
  );
};

export default Header;
