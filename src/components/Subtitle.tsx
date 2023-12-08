import React from "react";
import styled from "styled-components";

interface OwnProps {
  text: string;
}
const Subtitle: React.FC<OwnProps> = ({ text }) => {
  return <SubTitle>{text}</SubTitle>;
};

export default Subtitle;

const SubTitle = styled.h2`
  font-size: 30px;
`;
