import React from "react";
import styled from "styled-components";
import Introduce from "../components/Introduce";
import Skills from "../components/Skills";

const Main: React.FC = () => {
  return (
    <Container>
      <Introduce />
      <Skills/>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;
