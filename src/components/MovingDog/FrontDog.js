import React from "react";
import styled, { keyframes, css } from "styled-components";
import { COLORS } from "../../styles/common";

const wag = keyframes`
50% {
    transform: rotate(10deg);
  }
`;

const blink = keyframes`
 0%, 100% {
    transform: scale(1, 0.05);
  }
  5%, 95% {
    transform: scale(1, 1);
  }
`;

const tongue = keyframes`
0% {
  animation-timing-function : ease-in;
}
100% {
  height: 25px;
}
`;

const runningFrontLeg = keyframes`
50%{
    transform : rotate(30deg);
}
`;

const runningBackLeg = keyframes`
50%{
    transform : rotate(-70deg);
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
  background: ${COLORS.mallangWhite};
  height: 110px;
  width: 120px;
  position: relative;
  top: 95px;
  left: -13px;
  border-radius: 60px 60px 120px 120px;
  bottom: 573px;
  transform-style: preserve-3d;
`;

const DogBody = styled.div`
  background: ${COLORS.mallangWhite};
  height: 100px;
  width: 170px;
  position: relative;
  top: 53px;
  left: 31px;
  border-radius: 0px 50px 50px 50px;
  transform: rotate(-12deg);
`;

const dogLeg = styled.div`
  background: ${COLORS.mallangWhite};
  width: 18px;
  height: 50px;
  position: relative;
  transform: rotate(0deg);
  border-radius: 0px 0px 50px 50px;
  z-index: -1;
  transform-origin: top;
`;

const Leg1 = styled(dogLeg)`
  top: 39px;
  left: 49px;

  ${({ running }) =>
    running &&
    css`
      animation: ${runningFrontLeg} 0.5s alternate infinite linear;
    `}
`;

const Leg2 = styled(dogLeg)`
  top: -2px;
  left: 86px;

  ${({ running }) =>
    running &&
    css`
      animation: ${runningFrontLeg} 0.5s alternate infinite linear;
    `}
`;

const Leg3 = styled(dogLeg)`
  top: -83px;
  left: 149px;

  ${({ running }) =>
    running &&
    css`
      animation: ${runningBackLeg} 0.7s alternate infinite linear;
      animation-delay: 250ms;
    `}
`;

const Leg4 = styled(dogLeg)`
  top: -133px;
  left: 178px;

  ${({ running }) =>
    running &&
    css`
      animation: ${runningBackLeg} 0.7s alternate infinite linear;
      animation-delay: 250ms;
    `}
`;

const Paw = styled.div`
  background: ${COLORS.mallangWhite};
  width: 20px;
  height: 24px;
  position: relative;
  border-radius: 20px 20px 40px 40px;
  transform: rotate(70deg);
  right: 8px;
  top: 31px;
`;

const Paw1 = styled(Paw)``;
const Paw2 = styled(Paw)``;
const Paw3 = styled(Paw)``;
const Paw4 = styled(Paw)``;

const Tail = styled.div`
  height: 100px;
  width: 100px;
  background-color: transparent;
  box-shadow: 49px 10px 0px 0px ${COLORS.mallangWhite};
  border-radius: 80%;
  position: relative;
  bottom: 345px;
  left: 86px;
  transform-origin: bottom;
  animation: ${wag} 1s infinite;
`;

const Ear = styled.div`
  background: ${COLORS.mallangWhite};
  width: 41px;
  height: 80px;
  position: relative;
  border-radius: 800px 800px 120px 120px;
`;

const Ear1 = styled(Ear)`
  top: -44px;
  left: 0px;
`;

const Ear2 = styled(Ear)`
  bottom: 123px;
  left: 79px;
`;

const EarInside1 = styled(Ear1)`
  width: 25px;
  height: 28px;
  background: ${COLORS.mallangEarInside};
  opacity: 50%;
  top: -195px;
  left: 8px;
`;

const EarInside2 = styled(Ear2)`
  width: 25px;
  height: 28px;
  background: ${COLORS.mallangEarInside};
  opacity: 50%;
  top: -223px;
  left: 87px;
`;

const Nose = styled.div`
  position: relative;
  background-color: ${COLORS.mallangBlack};
  height: 12px;
  width: 18px;
  top: -169px;
  right: -51px;
  border-bottom-right-radius: 50% 100%;
  border-bottom-left-radius: 50% 100%;
`;

const Eye = styled.div`
  background-color: ${COLORS.mallangBlack};
  width: 10px;
  height: 13px;
  position: relative;
  border-radius: 50%;
  animation: ${blink} 3s infinite;
`;

const Eye1 = styled(Eye)`
  bottom: 208px;
  left: 23px;
`;
const Eye2 = styled(Eye)`
  bottom: 220px;
  left: 85px;
`;

const Mouth = styled.div`
  width: 23px;
  height: 12px;
  border: 2px solid ${COLORS.mallangBlack};
  border-top-left-radius: 100px;
  border-top-right-radius: 120px;
  border-bottom: 0px;
  position: relative;
  background: ${COLORS.mallangWhite};
  z-index: -1;
`;

const Mouth1 = styled(Mouth)`
  transform: rotate(150deg);
  bottom: 201px;
  left: 41px;
`;

const Mouth2 = styled(Mouth)`
  bottom: 214px;
  transform: rotate(-150deg);
  left: 55px;
`;

const Tongue = styled.div`
  position: relative;
  bottom: 222px;
  left: 54px;
  width: 14px;
  height: 20px;
  background: ${COLORS.mallangTongue};
  border-radius: 5px 5px 10px 10px;
  animation: ${tongue} 0.3s none infinite;
  transform-origin: 50% 0%;
  z-index: -2;
`;

const FrontDog = ({ running }) => {
  return (
    <Walkingdog>
      <DogFace>
        <Ear1></Ear1>
        <Ear2></Ear2>
        <EarInside1></EarInside1>
        <EarInside2></EarInside2>
        <Nose></Nose>
        <Eye1></Eye1>
        <Eye2></Eye2>
        <Mouth1></Mouth1>
        <Mouth2></Mouth2>
        <Tongue></Tongue>
      </DogFace>
      <DogBody></DogBody>
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
      <Tail></Tail>
    </Walkingdog>
  );
};

export default FrontDog;
