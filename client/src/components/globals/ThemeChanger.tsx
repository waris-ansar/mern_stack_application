import React, { useEffect } from "react";
import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { useTheme } from "../../contexts/themeContext";
import { Sun, Moon } from "@phosphor-icons/react";

const ThemeChanger: React.FC = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const { setIsDark } = useTheme();
  const computedColorScheme = useComputedColorScheme("light");
  const toggleColorScheme = (): void => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
    setIsDark(computedColorScheme === "dark" ? false : true);
  };

  useEffect(() => {
    if (computedColorScheme === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

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
