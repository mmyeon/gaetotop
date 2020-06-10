import styled from "styled-components";

const home = styled.div`
  background: #a0c3d2;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const logo = styled.div`
  font-family: "Gugi", cursive;
  font-size: 22vw;
  font-weight: 500;
  letter-spacing: -5px;
`;

const logoDesc = styled.p`
  font-family: "Nanum Myeongjo", serif;
  font-weight: 900;
  font-size: 2.5vw;
  letter-spacing: 2px;
`;

export default {
  home,
  logo,
  logoDesc,
};
