import React from "react";
import styled from "styled-components";
import Header from "./Header";
import ThemeContext from "../context/ThemeContext";

interface propsType {
  children: React.ReactNode;
}

const Layout: React.FC<propsType> = (props) => {
  return (
    <MainContainer>
      <Header />
      <Main>{props.children}</Main>
    </MainContainer>
  );
};

export default Layout;

const MainContainer = styled.div`
  width: 100%;
  height: auto;
`;

const Main = styled.main`
  min-height: calc(100vh - 74px);

  padding: 10px 15px;
  background-color: ${(props) => {
    const { mode } = props.theme;
    const { currentTheme } = React.useContext(ThemeContext);
    return mode[currentTheme].background;
  }};

  color: ${(props) => {
    const { mode } = props.theme;
    const { currentTheme } = React.useContext(ThemeContext);
    return mode[currentTheme].color;
  }};
  transition: 0.22s;
`;
