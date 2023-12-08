import { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../context/ThemeContext";

const DarkMode = () => {
  const context = useContext(ThemeContext);

  return (
    <DarkModeContainer>
      <p>다크모드</p>
      <Lap onClick={context.modeHandler}>
        <Raa />
      </Lap>
    </DarkModeContainer>
  );
};

export default DarkMode;

const DarkModeContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Lap = styled.div`
  width: 2rem;
  height: 1.3rem;
  margin-left: 5px;
  border-radius: 2rem;
  padding: 2px;
  display: flex;
  justify-content: ${() => {
    const context = useContext(ThemeContext);
    return context.currentTheme === "light" ? "flex-start" : "flex-end";
  }};
  align-items: center;
  background-color: ${() => {
    const context = useContext(ThemeContext);
    return context.currentTheme === "light" ? "white" : "yellow";
  }};
  transition: justify-content 1s, background-color 500ms;
`;

const Raa = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  background-color: gray;
  transition: 2s;
`;
