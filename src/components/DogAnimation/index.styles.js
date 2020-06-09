import styled, { keyframes } from "styled-components";

const wagKeyframes = keyframes`
50% {
    transform: rotate(10deg);
  }
`;

const kickKeyframes = keyframes`
50% {
    transform: rotate(30deg);
  }
`;

const tongueKeyframes = keyframes`
50% {
    transform: rotate(30deg) translateY(2.5px);
  }
`;

const movingDog = styled.div`
  position: absolute;
  transform: translate(40, 40);
  z-index: 100;
`;

const dogFace = styled.div`
  background: peachpuff;
  width: 120px;
  height: 75px;
  position: absolute;
  top: 40%;
  left: 35%;
  border-radius: 0px 0px 0px 120px;
`;

const dogBody = styled.div`
  background: peachpuff;
  width: 180px;
  height: 100px;
  position: absolute;
  top: 55px;
  left: 70px;
  border-radius: 0px 0px 0px 60px;
`;

const dogLeg = styled.div`
  background: peachpuff;
  width: 18px;
  height: 50px;
  position: relative;
`;

const leg1 = styled(dogLeg)`
  top: 90px;
  left: 34px;
  transform: rotate(45deg);
  transform-origin: top;
  animation: ${kickKeyframes} 1s infinite;
`;

const leg2 = styled(dogLeg)`
  top: 41px;
  left: 64px;
`;

const leg3 = styled(dogLeg)`
  top: -7px;
  left: 137px;
  background: rgba(204, 174, 148, 0.9);
  z-index: -1;
`;

const leg4 = styled(dogLeg)`
  top: -57px;
  left: 162px;
`;

const tail = styled.div`
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
  animation: ${wagKeyframes} 0.8s infinite;
`;

const ear = styled.div`
  background: salmon;
  width: 45px;
  height: 90px;
  border-radius: 0 0 100px 100px;
  position: relative;
  bottom: 355px;
  left: 5px;
`;

const nose = styled.div`
  background: black;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: relative;
  bottom: 450px;
  right: 76px;
`;

const eye = styled.div`
  background: black;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: relative;
  bottom: 448px;
  right: 18px;
`;

const tongue = styled.div`
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
  animation: ${tongueKeyframes} 0.8s infinite;
`;

export default {
  tongue,
  movingDog,
  dogFace,
  dogBody,
  dogLeg,
  leg1,
  leg2,
  leg3,
  leg4,
  tail,
  ear,
  nose,
  eye,
};
