import React, { useState, createContext, useContext } from "react";

interface ThemeContextType {
  isDark: boolean;
  setIsDark: (mode: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  const handleThemeCahnge = (currentTheme: boolean) => {
    setIsDark(currentTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("Use Theme must be wrapped inside the theme container");
  }

  return context;
}
