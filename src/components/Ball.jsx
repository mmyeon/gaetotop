import styled, { keyframes } from "styled-components";

const move = keyframes`
/* 50% {
    transform: translateX(40%);
  } */
  100% {
     transform: translateX(80%) rotate(360deg);
  }
`;

const Ball = styled.div`
  position: relative;
  right: 9%;
  width: 100px;
  height: 100px;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Gugi", cursive;
  margin-top: 92px;
  letter-spacing: 2px;
  font-size: 30px;
  line-height: 5;
  cursor: pointer;
  background: #ff4532;
  animation: ${move} 0.7s alternate infinite;
`;

export default Ball;
