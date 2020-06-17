import React from "react";
import styled, { keyframes, css } from "styled-components";

const wag = keyframes`
50% {
    transform: rotate(10deg);
  }
`;

const runningFrontLeg = keyframes`
50%{
    transform : rotate(30deg);
}
`;

const runningBackLeg = keyframes`
50%{
    transform : rotate(-10deg);
}
`;

const Walkingdog = styled.div`
  position: absolute;
  left: 40%;
  bottom: 25%;
  width: 10vw;
  height: 15.58vw;
  transform-style: preserve-3d;
  z-index: 100;
`;

const DogFace = styled.div`
  background: peachpuff;
  height: 110px;
  width: 120px;
  position: relative;
  top: 55%;
  left: 94%;
  border-radius: 60px 60px 120px 120px;
  bottom: 573px;
  transform-style: preserve-3d;
`;

const DogBody = styled.div`
  background: peachpuff;
  height: 155px;
  width: 110px;
  position: relative;
  top: 21px;
  left: 49px;
  border-radius: 40%;
  transform: rotate(-110deg);
  z-index: 100;
`;

const dogLeg = styled.div`
  background: peachpuff;
  width: 18px;
  height: 50px;
  background: peachpuff;
  transform: rotate(112deg);
  border-radius: 0px 0px 50px 50px;
  position: relative;
  transform-origin: top;
`;

const Leg1 = styled(dogLeg)`
  top: 127px;
  left: 6px;

  ${({ running }) =>
    running &&
    css`
      animation: ${runningFrontLeg} 0.5s alternate infinite linear;
    `}
`;

const Leg2 = styled(dogLeg)`
  top: 49px;
  left: 15px;

  ${({ running }) =>
    running &&
    css`
      animation: ${runningFrontLeg} 0.5s alternate infinite linear;
    `}
`;

const Leg3 = styled(dogLeg)`
  top: -80px;
  left: 13px;

  ${({ running }) =>
    running &&
    css`
      animation: ${runningBackLeg} 0.7s alternate infinite linear;
      animation-delay: 250ms;
    `}
`;

const Leg4 = styled(dogLeg)`
  top: -96px;
  left: 3px;

  ${({ running }) =>
    running &&
    css`
      animation: ${runningBackLeg} 0.7s alternate infinite linear;
      animation-delay: 250ms;
    `}
`;

const Paw = styled.div`
  width: 20px;
  height: 24px;
  background: peachpuff;
  position: relative;
  border-radius: 20px 20px 40px 40px;
  transform: rotate(260deg);
  right: -5px;
  top: 27px;
`;

const Paw1 = styled(Paw)``;
const Paw2 = styled(Paw)``;
const Paw3 = styled(Paw)``;
const Paw4 = styled(Paw)``;

const Tail = styled.div`
  height: 100px;
  width: 100px;
  background-color: transparent;
  box-shadow: -49px -10px 0px 0px peachpuff;
  border-radius: 80%;
  position: relative;
  bottom: 150px;
  left: 26px;
  transform-origin: bottom;
  animation: ${wag} 1s infinite;
`;

const Ear = styled.div`
  background: peachpuff;
  width: 41px;
  height: 80px;
  position: relative;
  border-radius: 800px 800px 120px 120px;
`;

const Ear1 = styled(Ear)`
  bottom: 44px;
  left: 0px;
`;

const Ear2 = styled(Ear)`
  bottom: 125px;
  left: 79px;
`;

const BackDog = ({ running }) => {
  return (
    <Walkingdog>
      <DogFace>
        <Ear1></Ear1>
        <Ear2></Ear2>
      </DogFace>
      <DogBody>
        <Leg1 running={running}>
          <Paw1></Paw1>
        </Leg1>
        <Leg2 running={running}>
          <Paw2></Paw2>
        </Leg2>
        <Leg3 running={running}>
          <Paw3></Paw3>
        </Leg3>
        <Leg4 running={running}>
          <Paw4></Paw4>
        </Leg4>
      </DogBody>
      <Tail></Tail>
    </Walkingdog>
  );
};

export default BackDog;
