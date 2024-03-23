import React, { useState } from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import ThemeChanger from "./components/globals/ThemeChanger";
import { themeProperties } from "./constants/theme";
import Header from "./components/globals/Header"

function App() {
  return (
    <MantineProvider defaultColorScheme="light" theme={themeProperties}>
      <Header />
    </MantineProvider>
  );
}

export default App;
