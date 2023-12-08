import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import DarkMode from "./DarkMode";
import ThemeContext from "../context/ThemeContext";
import { Link } from "react-router-dom";
const MenuUi = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuChangeStateFn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <>
          <MenuContainer>
            <MenuHeaderWrapper>
              <MenuHeader>
                <DarkMode />
                <FontAwesomeIcon icon={faX} onClick={menuChangeStateFn} />
              </MenuHeader>
            </MenuHeaderWrapper>

            <MenuListContainer>
              <MenuList>
                <Link to="/">
                  <Menu>HOME</Menu>
                </Link>
                <a target="_blank" href="https://github.com/rmJHG">
                  <Menu>GITHUB</Menu>
                </a>
                <a target="_blank" href="helloworld">
                  <Menu>BLOG</Menu>
                </a>
              </MenuList>
            </MenuListContainer>
          </MenuContainer>

          <MenuBackground onClick={menuChangeStateFn} />
        </>
      )}

      <MenuBtn onClick={menuChangeStateFn}>
        <FontAwesomeIcon icon={faBars} />
      </MenuBtn>
    </>
  );
};

export default MenuUi;

const MenuContainer = styled.div`
  min-width: 200px;
  width: 50%;
  height: 100%;
  text-align: center;
  position: fixed;
  right: 0;
  top: 0;
  background-color: #424242;
  color: white;
  z-index: 99;
  animation: fadeInRight 0.5s;
  @keyframes fadeInRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;
const MenuBackground = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0.2;
  position: fixed;
  top: 0;
  left: 0;
  background-color: gray;
  z-index: 3;
`;
const MenuHeaderWrapper = styled.div`
  border-bottom: 1px solid
    ${(props) => {
      const { mode } = props.theme;
      const { currentTheme } = React.useContext(ThemeContext);
      return mode[currentTheme].borderColor;
    }};
  padding: 0.77rem 0;
  transition: 0.22s;
`;
const MenuHeader = styled.div`
  height: 3rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const MenuListContainer = styled.div``;
const MenuList = styled.ul``;

const Menu = styled.p`
  margin-top: 10px;
  padding: 10px 10px;
  color: white;
  &:hover {
    background-color: white;
    color: black;
  }
`;
const MenuBtn = styled.div`
  background: none;
  position: absolute;
  color: ${(props) => {
    const { mode } = props.theme;
    const { currentTheme } = React.useContext(ThemeContext);
    return mode[currentTheme].color;
  }};
  top: 25px;
  right: 16px;
`;
