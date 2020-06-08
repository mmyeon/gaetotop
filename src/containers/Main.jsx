import React, { useState, useRef, useCallback } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const Mainwrapper = styled.div`
  height: 500vw;
  color: #555;
  background: #fff000;
`;

const World = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  perspective: 1000px;
`;

const Stage = styled.div`
  position: abosolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  transform-style: preserve-3d;
`;

const House = styled.div`
  width: 100vw;
  height: 100vh;
  transform: translateZ(-490vw);
  transform-style: preserve-3d;
`;

const Wall = styled.section`
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

const Wallside = styled(Wall)`
  background: #f8f8f8;
  width: 1000vw;
  transform: ${({ transform }) => transform};
`;

const Wallcontent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Walltitle = styled.h2`
  font-size: 5rem;
`;

const Main = () => {
  const [scroll, setScroll] = useState(0);
  const [zmove, setZmove] = useState(0);
  const [maxScrollValue, setMaxScrollValue] = useState(1);
  // const [pageYoffset, setPageYoffset] = useState(0);

  const houseRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    if (mainRef.current) {
      setMaxScrollValue(mainRef.current.clientHeight - window.innerHeight);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainRef.current]);

  const scrollPer = scroll / maxScrollValue;
  const handleScroll = useCallback(() => {
    setScroll(window.pageYOffset);
    setZmove(scrollPer * 980 - 490);
    console.log(scrollPer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll]);

  const handleResize = useCallback(() => {
    setMaxScrollValue(mainRef.current.clientHeight - window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    console.log("호출하긴한???", window.scrollY);
    // 위치만 변함
    // window.scrollTo(1, 1);
    window.scrollY = 0;
    // setScroll(0);
    // setZmove(0);

    // console.log("렌더링됨");
    // console.log("scroll", scroll);
    // console.log("전", window.pageYOffset);

    // console.log("후", window.pageYOffset);
    // console.log(scrollPer);
    // // 화면은 변경되는데 스크롤바 위치가 탑으로 돌아오지 않음
    // // pageYOffset을 초기화해주면 어떨까
  }, []);

  return (
    <Mainwrapper ref={mainRef}>
      <div className="progress-bar-container">
        <div className="progress-bar-con">
          <div
            className="progress-bar"
            style={{ width: `${scrollPer}` * 100 + "%" }}
          ></div>
        </div>
      </div>
      <World>
        <Stage>
          <House ref={houseRef} style={{ transform: `translateZ(${zmove}vw)` }}>
            <Wallside
              left
              transform={"rotateY(90deg) translateZ(-500vw)"}
            ></Wallside>
            <Wallside
              right
              transform={"rotateY(90deg) translateZ(-400vw)"}
            ></Wallside>
            <Wall front="frontA">
              <Wallcontent>
                <Walltitle>말랑이가 아파요</Walltitle>
              </Wallcontent>
            </Wall>
            <Wall front="frontB">
              <Wallcontent>
                <Walltitle>병원에 찾아갔어요</Walltitle>
              </Wallcontent>
            </Wall>
            <Wall front="frontC">
              <Wallcontent>
                <Walltitle>슬개골 수술을 받았어요</Walltitle>
              </Wallcontent>
            </Wall>
            <Wall frontD>
              <Wallcontent>
                <Walltitle>수술 후 회복하고 있어요</Walltitle>
              </Wallcontent>
            </Wall>
          </House>
        </Stage>
      </World>
    </Mainwrapper>
  );
};

export default Main;
