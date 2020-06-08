import React from "react";

import Styled from "./index.styles";

const DogAnimation = () => {
  return (
    <Styled.movingDog>
      <Styled.dogFace>
        <Styled.dogBody>
          <Styled.leg1 wag></Styled.leg1>
          <Styled.leg2></Styled.leg2>
          <Styled.leg3></Styled.leg3>
          <Styled.leg4></Styled.leg4>
          <Styled.tail></Styled.tail>
          <Styled.ear></Styled.ear>
          <Styled.nose></Styled.nose>
          <Styled.eye></Styled.eye>
          <Styled.tongue></Styled.tongue>
        </Styled.dogBody>
      </Styled.dogFace>
    </Styled.movingDog>
  );
};

export default DogAnimation;
