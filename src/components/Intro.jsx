import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Ball from "./Ball";
import DogAnimation from "./DogAnimation";
import { get } from "../modules/sample";

const Home = styled.div`
  background: #a0c3d2;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  font-family: "Gugi", cursive;
  font-size: 22vw;
  font-weight: 500;
  letter-spacing: -5px;
`;

const LogoDesc = styled.p`
  font-family: "Nanum Myeongjo", serif;
  font-weight: 900;
  font-size: 2.5vw;
  letter-spacing: 2px;
`;

const Intro = ({ setIsVisibleMain, sample, get }) => {
  return (
    <Home>
      <Logo>개토톱</Logo>
      {/* <Logo>개토톱{sample.miyeon}</Logo> */}
      <LogoDesc>
        슬개골이 아픈 강아지가 치료받기까지 보호자의 마음고생기
      </LogoDesc>
      <Ball onClick={handleClick}>Go</Ball>
      <DogAnimation />
    </Home>
  );

  function handleClick() {
    setIsVisibleMain(true);
  }
};

export default connect(({ sample }) => ({ sample }), {
  get,
})(Intro);
