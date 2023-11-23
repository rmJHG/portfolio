import React  from "react";
import styled from "styled-components";
import ThemeContext from "../context/ThemeContext";

const Header: React.FC = () => {

  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <Title>rmJHG</Title>
        </TitleContainer>

    
      </Container>

    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid
    ${(props) => {
      const { mode } = props.theme;
      const { currentTheme } = React.useContext(ThemeContext);
      return mode[currentTheme].borderColor;
    }};
  padding: 1rem;
  background-color: ${(props) => {
    const { mode } = props.theme;
    const { currentTheme } = React.useContext(ThemeContext);
    return mode[currentTheme].background;
  }};
  transition: 0.22s;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const TitleContainer = styled.div`
  padding: 0.5rem 0;
`;
const Title = styled.div`
  color: ${(props) => {
    const { mode } = props.theme;
    const { currentTheme } = React.useContext(ThemeContext);
    return mode[currentTheme].color;
  }};
  font-size: 25px;
`;

