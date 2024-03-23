import React, { useState } from "react";
import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { Sun, Moon } from "@phosphor-icons/react";

const ThemeChanger: React.FC = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");
  const toggleColorScheme = (): void => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  return (
    <ActionIcon
      variant="outline"
      color={computedColorScheme === "dark" ? "yellow" : "blue"}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {computedColorScheme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
    </ActionIcon>
  );
};

export default ThemeChanger;
