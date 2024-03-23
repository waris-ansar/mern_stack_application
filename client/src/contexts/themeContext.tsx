import React, { useState,createContext, useContext } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState("light");
  
    const handleThemeCahnge = (currentTheme: string) => {
      setTheme(currentTheme)
    };
  
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
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
