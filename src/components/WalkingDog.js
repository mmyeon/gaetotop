import React from "react";
import styled, { keyframes } from "styled-components";

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

const Walkingdog = styled.div``;

const DogFace = styled.div`
  background: peachpuff;
  height: 110px;
  width: 120px;
  top: 40%;
  left: 30%;
  border-radius: 60px 60px 120px 120px;
  position: absolute;
  bottom: 573px;
  left: 20px;
`;

const DogBody = styled.div`
  background: peachpuff;
  height: 100px;
  width: 180px;
  position: relative;
  top: 53px;
  left: 31px;
  border-radius: 0px 50px 50px 50px;
  transform: rotate(-12deg);
  z-index: 10;
`;

const dogLeg = styled.div`
  background: peachpuff;
  width: 18px;
  height: 50px;
  position: relative;
  transform: rotate(12deg);
  border-radius: 0px 0px 50px 50px;
  z-index: -1;
`;

const Leg1 = styled(dogLeg)`
  top: 89px;
  left: 18px;
  transform-origin: top;
`;

const Leg2 = styled(dogLeg)`
  top: 45px;
  left: 47px;
`;

const Leg3 = styled(dogLeg)`
  position: relative;
  top: -15px;
  left: 101px;
  background: rgba(204, 174, 148, 0.9);
  z-index: -100;
`;

const Leg4 = styled(dogLeg)`
  background: rgba(204, 174, 148, 0.9);
  top: -60px;
  left: 129px;
`;

const Paw = styled.div`
  width: 20px;
  height: 24px;
  background: peachpuff;
  position: relative;
  border-radius: 20px 20px 40px 40px;
`;

const Paw1 = styled(Paw)`
  right: 8px;
  top: 31px;
  transform: rotate(70deg);
`;
const Paw2 = styled(Paw)`
  right: 8px;
  top: 31px;
  transform: rotate(70deg);
`;
const Paw3 = styled(Paw)`
  right: 8px;
  top: 31px;
  background: rgba(204, 174, 148, 0.9);
  transform: rotate(70deg);
`;
const Paw4 = styled(Paw)`
  right: 8px;
  top: 31px;
  background: rgba(204, 174, 148, 0.9);
  transform: rotate(70deg);
`;

const Tail = styled.div`
  height: 100px;
  width: 100px;
  background-color: transparent;
  box-shadow: 49px 10px 0px 0px peachpuff;
  border-radius: 80%;
  position: relative;
  bottom: 287px;
  left: 63px;
  transform-origin: bottom;
  animation: ${wag} 1s infinite;
`;

const Ear = styled.div`
  background: peachpuff;
  width: 41px;
  height: 80px;
  position: relative;
  transform: rotate(12deg);
`;

const Ear1 = styled(Ear)`
  bottom: 409px;
  left: -8px;
  border-radius: 800px 800px 120px 120px;
`;

const Ear2 = styled(Ear)`
  bottom: 472px;
  left: 69px;
  border-radius: 800px 800px 120px 120px;
`;

const EarInside1 = styled(Ear1)`
  width: 25px;
  height: 28px;
  background: #de6465;
  opacity: 80%;
  bottom: 562px;
  left: 4px;
`;

const EarInside2 = styled(Ear2)`
  width: 25px;
  height: 28px;
  background: #de6465;
  opacity: 80%;
  bottom: 573px;
  left: 81px;
`;

const Nose = styled.div`
  position: relative;
  background-color: black;
  height: 12px;
  width: 18px;
  top: -533px;
  right: -30px;
  border-bottom-right-radius: 50% 100%;
  border-bottom-left-radius: 50% 100%;
  transform: rotate(12deg);
`;

const Eye = styled.div`
  background: black;
  width: 10px;
  height: 13px;
  position: relative;
  border-radius: 50%;
  animation: ${blink} 3s infinite;
  transform: rotate(12deg);
`;

const Eye1 = styled(Eye)`
  bottom: 573px;
  left: 12px;
`;
const Eye2 = styled(Eye)`
  bottom: 575px;
  left: 67px;
`;

const Mouth = styled.div`
  width: 23px;
  height: 12px;
  border: 2px solid black;
  border-top-left-radius: 100px;
  border-top-right-radius: 120px;
  border-bottom: 0px;
  position: relative;
  background: peachpuff;
  z-index: -1;
`;

const Mouth1 = styled(Mouth)`
  bottom: 565px;
  transform: rotate(150deg);
  left: 18px;
`;

const Mouth2 = styled(Mouth)`
  bottom: 573px;
  transform: rotate(-150deg);
  left: 34px;
`;

const Tongue = styled.div`
  position: relative;
  bottom: 584px;
  left: 31px;
  transform: rotate(12deg);
  width: 14px;
  height: 20px;
  background: #de6465;
  /* border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%; */
  border-radius: 5px 5px 10px 10px;
  animation: ${tongue} 0.3s none infinite;
  transform-origin: 50% 0%;
  z-index: -2;
`;

const WalkingDog = () => {
  return (
    <Walkingdog>
      <DogFace>
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
          <Tail></Tail>
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
        </DogBody>
      </DogFace>
    </Walkingdog>
  );
};

export default WalkingDog;
