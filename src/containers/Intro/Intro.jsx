import React from "react";
import Styled from "./Into.styles";
import Ball from "../../components/Ball";
import DogAnimation from "../../components/DogAnimation";

const Intro = ({ setIsVisibleMain }) => {
  return (
    <Styled.home>
      <Styled.logo>개토톱</Styled.logo>
      <Styled.logoDesc>
        슬개골이 아픈 강아지가 치료받기까지 보호자의 마음고생기
      </Styled.logoDesc>
      <Ball onClick={handleClick}>Go</Ball>
      <DogAnimation />
    </Styled.home>
  );

  function handleClick() {
    setIsVisibleMain(true);
  }
};

export default Intro;
