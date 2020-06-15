import React from "react";
import styled, { keyframes } from "styled-components";

const wag = keyframes`
50% {
    transform: rotate(10deg);
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
  height: 208px;
  width: 110px;
  position: relative;
  top: -14px;
  left: 35px;
  border-radius: 40%;
  transform: rotate(-110deg);
  /* TODO:z-index 수정하기. 뒷다리가 몸통보다 뒤로 가도록 */
  z-index: 100;
`;

const dogLeg = styled.div`
  background: peachpuff;
  width: 18px;
  height: 50px;
  background: peachpuff;
  transform: rotate(112deg);
  border-radius: 0px 0px 50px 50px;
  /* position: absolute; */
  position: relative;
  /* z-index: -1; */
`;

const Leg1 = styled(dogLeg)`
  top: 176px;
  left: 10px;
  transform-origin: top;
`;

const Leg2 = styled(dogLeg)`
  top: 51px;
  left: -9px;
`;

const Leg3 = styled(dogLeg)`
  position: relative;
  top: -62px;
  left: -9px;
  z-index: -100;
`;

const Leg4 = styled(dogLeg)`
  top: -158px;
  left: 0px;
  z-index: -100;
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
  bottom: 205px;
  left: 3px;
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

const BackDog = () => {
  return (
    <Walkingdog>
      <DogFace>
        <Ear1></Ear1>
        <Ear2></Ear2>
      </DogFace>
      <DogBody>
        <Leg1>
          <Paw1></Paw1>
        </Leg1>
        <Leg2>
          <Paw2></Paw2>
        </Leg2>
        <Leg3>
          <Paw3></Paw3>
        </Leg3>
        <Leg4>
          <Paw4></Paw4>
        </Leg4>
      </DogBody>
      <Tail></Tail>
    </Walkingdog>
  );
};

export default BackDog;
