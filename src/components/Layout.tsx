import React, { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";
import ThemeContext from "../context/ThemeContext";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MainContainer>
      <Header />
      <Main>
        <MoveWrapper>{children}</MoveWrapper>
      </Main>
      <Footer />
    </MainContainer>
  );
};

export default Layout;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => {
    const { mode } = props.theme;
    const { currentTheme } = React.useContext(ThemeContext);
    return mode[currentTheme].background;
  }};
`;

const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 110px);
  padding: 10px 15px;
  color: ${(props) => {
    const { mode } = props.theme;
    const { currentTheme } = React.useContext(ThemeContext);
    return mode[currentTheme].color;
  }};
  transition: 0.22s;
`;

const MoveWrapper = styled.div`
  animation: move 1s;
  @keyframes move {
    0% {
      transform: translateY(25px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
