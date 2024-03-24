import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/mantine.css";
import App from "./App";
import { ThemeProvider } from "./contexts/themeContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
