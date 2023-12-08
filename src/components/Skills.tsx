import React from "react";
import styled from "styled-components";
import Subtitle from "./Subtitle";
import Skill from "./Skill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

const Skills: React.FC = () => {
  return (
    <Container>
      <SubTitleContainer>
        <FontAwesomeIcon icon={faScrewdriverWrench} />
        <Subtitle text="SKILL" />
      </SubTitleContainer>
      <SkillContainer>
        <p>LAGNGUAGE</p>

        <SkillsContainer>
          <Skill text="Javascript" />
          <Skill text="Typescript" />
        </SkillsContainer>
      </SkillContainer>

      <SkillContainer>
        <p>
          FRAMEWORK <span>& LIBRARY</span>
        </p>
        <SkillsContainer>
          <Skill text="React" />
          <Skill text="Styled Components" />
          <Skill text="React Router" />
          <Skill text="Recoil" />
        </SkillsContainer>
      </SkillContainer>
      <SkillContainer>
        <p>HOST</p>

        <SkillsContainer>
          <Skill text="Firebase" />
        </SkillsContainer>
      </SkillContainer>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  margin: 30px 0;
  svg {
    width: 2rem;
    height: 2rem;
  }
`;

const SubTitleContainer = styled.div`
  display: flex;
  text-align: center;
  margin-bottom: 15px;
  h2 {
    margin-left: 10px;
  }
`;
const SkillContainer = styled.div``;

const SkillsContainer = styled.div`
  display: flex;
`;
