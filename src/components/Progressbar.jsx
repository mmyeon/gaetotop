import React from "react";
import styled from "styled-components";

const Barcontainer = styled.div`
  background: #555;
  height: 5px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
`;

const Bar = styled.div`
  width: 20%;
  height: 100%;
  background: #00a8ff;
`;

const Progressbar = ({ scrollPer }) => {
  return (
    <Barcontainer>
      <Bar style={{ width: `${scrollPer}` * 100 + "%" }} />
    </Barcontainer>
  );
};

export default Progressbar;
