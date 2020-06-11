import styled from "styled-components";

const mainwrapper = styled.div`
  height: 500vw;
  color: #555;
  background: #fff000;
`;

const progressbarcontainer = styled.div`
  background: #555;
  height: 5px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
`;

const progressbar = styled.div`
  width: ${(props) => `${props.width}%`};
  height: 100%;
  background: #00a8ff;
`;

const world = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  perspective: 1000px;
`;

const stage = styled.div`
  position: abosolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  transform-style: preserve-3d;
`;

const house = styled.div`
  width: 100vw;
  height: 100vh;
  transform: ${(props) => `${props.transform}`};
  transform-style: preserve-3d;
`;

const wall = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.8);

  transform: ${({ front }) => {
    switch (front) {
      case "frontA":
        return "translateZ(300vw)";
      case "frontB":
        return "translateZ(50vw)";
      case "frontC":
        return "translateZ(-200vw)";
      default:
        return "translateZ(-500vw)";
    }
  }};
`;

const wallside = styled(wall)`
  background: #f8f8f8;
  width: 1000vw;
  transform: ${({ transform }) => transform};
`;

const wallcontent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const walltitle = styled.h2`
  font-size: 5rem;
`;

export default {
  mainwrapper,
  progressbarcontainer,
  progressbar,
  world,
  stage,
  house,
  wallside,
  wall,
  wallcontent,
  walltitle,
};
