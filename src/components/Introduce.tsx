import React from "react";
import styled from "styled-components";
import { faEnvelope, faCodeBranch, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeContext from "../context/ThemeContext";
import { faHand } from "@fortawesome/free-regular-svg-icons";

const Introduce: React.FC = () => {
  return (
    <div>
      <TitleContainer>
        <FontAwesomeIcon icon={faHand} />
        <Title>Hangyu Portfolio</Title>
      </TitleContainer>
      <SubContainer>
        <InfoContainer>
          <Intro>
            <p>
              포기하지 않는 개발자 <b>장한규</b> 입니다.
            </p>
          </Intro>
          <br />
          <Intro>
            <p>오류를 해결하는 걸 좋아하고,</p>
          </Intro>
          <br />
          <Intro>
            <p> 새로운 것들을 배우는 걸 즐겨 합니다.</p>
          </Intro>
        </InfoContainer>
      </SubContainer>
      <ContactContainer>
        <Contact>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <a href="mailto:jhg990508@gmail.com">jhg990508@gmail.com</a>
        </Contact>

        <Contact>
          <div>
            <FontAwesomeIcon icon={faCodeBranch} />
          </div>
          <a href="https://github.com/rmJHG" target="_blink">
            GITHUB
          </a>
        </Contact>

        <Contact>
          <div>
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <p>010-5053-2122</p>
        </Contact>
      </ContactContainer>
    </div>
  );
};

export default Introduce;

const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  padding: 1rem;
  display: flex;
  svg {
    font-size: 30px;
    margin-right: 10px;
  }
`;
const Title = styled.h1`
  font-size: 35px;
  font-weight: 600;
`;

const SubContainer = styled.div`
  margin-bottom: 1rem;
  border: 1px solid
    ${(props) => {
      const { mode } = props.theme;
      const { currentTheme } = React.useContext(ThemeContext);
      return mode[currentTheme].borderColor;
    }};
  border-radius: 10px;
  padding: 2rem;
`;

const InfoContainer = styled.div``;

const Intro = styled.div`
  display: flex;
  text-decoration: none;
  &:first-child {
    margin-bottom: 5px;
  }
  p {
    font-family: "SunflowerLight";
    font-size: 18px;
    word-break: break-all;
  }
  b {
    font-family: "SunflowerMedium";
    font-size: 23px;
  }
`;
const ContactContainer = styled.div`
  height: 100%;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Contact = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  div {
    margin-right: 7px;
  }
  p {
    font-family: "Lato";
  }
  a {
    color: ${(props) => {
      const { mode } = props.theme;
      const { currentTheme } = React.useContext(ThemeContext);
      return mode[currentTheme].color;
    }};
  }
`;
