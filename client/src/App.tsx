import React, { useState } from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import ThemeChanger from "./components/globals/ThemeChanger";
import { themeProperties } from "./constants/theme";

function App() {
  return (
    <MantineProvider defaultColorScheme="light" theme={themeProperties}>
      <div className="d-flex items-center justify-center w-full h-screen">
        <ThemeChanger />
      </div>
    </MantineProvider>
  );
}

export default App;
