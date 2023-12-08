// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import Globalstyles from "./style/GlobalStyle";
import GlobalFont from "./style/GlobalFont";

import { ThemeContextProvider } from "./context/ThemeContext";
import MenuUi from "./components/MenuUI.tsx";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <GlobalFont />
    <Globalstyles />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ThemeContextProvider>
          <App />
          <MenuUi />
        </ThemeContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </>
);
