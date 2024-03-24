import React, { useState } from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import ThemeChanger from "./components/globals/ThemeChanger";
import { themeProperties } from "./constants/theme";
import { Routes, Route } from "react-router-dom";
import Header from "./components/globals/Header";
import Home from "./pages/Home";
import Signin from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <MantineProvider defaultColorScheme="light" theme={themeProperties}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
