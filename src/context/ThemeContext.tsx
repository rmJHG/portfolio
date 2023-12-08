import React, { createContext, useState } from "react";

const ThemeContext = createContext({
  currentTheme: "",
  modeHandler: () => {},
});

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const modeHandlerFn = () => {
    currentTheme === "dark" ? setCurrentTheme("light") : setCurrentTheme("dark");
  };
  const data = { currentTheme: currentTheme, modeHandler: modeHandlerFn };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
