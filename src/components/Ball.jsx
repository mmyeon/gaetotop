import React from "react";
import styled from "styled-components";

const Ball = styled.div`
  position: relative;
  left: 28px;
  width: 100px;
  height: 100px;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Gugi", cursive;
  margin-top: 47px;
  letter-spacing: 2px;
  font-size: 30px;
  line-height: 5;
  cursor: pointer;
  background: #ff4532;
  animation: move 0.8s alternate-reverse infinite;
`;

export default Ball;
