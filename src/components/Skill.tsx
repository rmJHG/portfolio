import React from "react";
import styled from "styled-components";

interface OwnProps {
  text: string;
}
const Skill: React.FC<OwnProps> = ({ text }) => {
  return <SkillIcon>{text}</SkillIcon>;
};

export default Skill;

const SkillIcon = styled.p`
  margin: 0 5px 6px 0;
  border: 1px solid black;
  border-radius: 7px;
  padding: 0.3rem 0.5rem;
  text-align: center;
  font-size: 14px;
`;
