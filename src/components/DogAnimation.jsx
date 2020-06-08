import React from "react";
import styled from "styled-components";

import { wag, tongue, kick } from "./styled";

const MovingDog = styled.div`
  position: absolute;
  transform: translate(40, 40);
  z-index: 100;
`;

const DogFace = styled.div`
  background: peachpuff;
  width: 120px;
  height: 75px;
  position: absolute;
  top: 40%;
  left: 35%;
  border-radius: 0px 0px 0px 120px;
`;

const DogBody = styled.div`
  background: peachpuff;
  width: 180px;
  height: 100px;
  position: absolute;
  top: 55px;
  left: 70px;
  border-radius: 0px 0px 0px 60px;
`;

const DogLeg = styled.div`
  background: peachpuff;
  width: 18px;
  height: 50px;
  position: relative;
`;

const Leg1 = styled(DogLeg)`
  top: 90px;
  left: 34px;
  transform: rotate(45deg);
  transform-origin: top;
  animation: ${kick} 1s infinite;
`;
/* /* transform: ${({ kick }) => };  */
/* /* transform: ${({ kick }) => };  */

const Leg2 = styled(DogLeg)`
  top: 41px;
  left: 64px;
`;

const Leg3 = styled(DogLeg)`
  top: -7px;
  left: 137px;
  background: rgba(204, 174, 148, 0.9);
  z-index: -1;
`;

const Leg4 = styled(DogLeg)`
  top: -57px;
  left: 162px;
`;

const Tail = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 100px solid peachpuff;
  position: relative;
  bottom: 284px;
  left: 158px;
  transform: rotate(40deg);
  transform-origin: bottom;
  animation: ${wag} 0.8s infinite;
`;

const Ear = styled.div`
  background: salmon;
  width: 45px;
  height: 90px;
  border-radius: 0 0 100px 100px;
  position: relative;
  bottom: 355px;
  left: 5px;
`;

const Nose = styled.div`
  background: black;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: relative;
  bottom: 450px;
  right: 76px;
`;

const Eye = styled.div`
  background: black;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: relative;
  bottom: 448px;
  right: 18px;
`;

const Tongue = styled.div`
  background-color: tomato;
  width: 15px;
  height: 40px;
  border-radius: 10px;
  position: relative;
  bottom: 432px;
  right: 32px;
  z-index: -1;
  transform: rotate(45deg);
  transform-origin: top;
  animation: ${tongue} 1s infinite;
`;

const DogAnimation = () => {
  return (
    <MovingDog>
      <DogFace>
        <DogBody>
          <Leg1 wag></Leg1>
          <Leg2></Leg2>
          <Leg3></Leg3>
          <Leg4></Leg4>
          <Tail></Tail>
          <Ear></Ear>
          <Nose></Nose>
          <Eye></Eye>
          <Tongue></Tongue>
        </DogBody>
      </DogFace>
    </MovingDog>
  );
};

export default DogAnimation;
