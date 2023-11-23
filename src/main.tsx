import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import Globalstyles from "./style/GlobalStyle";
import { ThemeContextProvider } from "./context/ThemeContext";
import MenuUi from "./components/MenuUI.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Globalstyles />
    <ThemeProvider theme={theme}>
      <ThemeContextProvider>
        <App />
        <MenuUi />
      </ThemeContextProvider>
    </ThemeProvider>
  </>
);
