import React from "react";
import styled from "styled-components";
import ThemeContext from "../context/ThemeContext";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <footer>Copyright 2023. rmJHG all rights reserved.</footer>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  height:100%;
  padding:10px 5px;
  text-align: center;
  color: ${(props) => {
    const { mode } = props.theme;
    const { currentTheme } = React.useContext(ThemeContext);
    return mode[currentTheme].color;
  }};
`;
