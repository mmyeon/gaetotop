import React, { useState, useRef, useCallback } from "react";
import { useEffect } from "react";
import Styled from "./Main.styles";
import { connect } from "react-redux";
import {
  updateYOffset,
  updateZMove,
  updateMaxScrollValue,
} from "../../modules/scroll";
import FrontDog from "../../components/MovingDog/FrontDog";
import BackDog from "../../components/MovingDog/BackDog";

const Main = ({
  yOffset,
  updateYOffset,
  zMove,
  updateZMove,
  maxScrollValue,
  updateMaxScrollValue,
}) => {
  const houseRef = useRef(null);
  const mainRef = useRef(null);
  const [scrollState, setScrollState] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [direction, setDirection] = useState("front");

  useEffect(() => {
    if (mainRef.current) {
      updateMaxScrollValue(mainRef.current.clientHeight - window.innerHeight);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainRef.current]);

  const scrollPer = yOffset / maxScrollValue;

  const handleScroll = useCallback(() => {
    updateYOffset(window.pageYOffset);
    updateZMove(parseInt(scrollPer * 980, 10) - 490);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPer, yOffset]);

  const handleResize = useCallback(() => {
    updateMaxScrollValue(mainRef.current.clientHeight - window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // 리사이즈
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    window.scrollY = 10;
  }, []);

  const timeoutID = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (timeoutID) {
        clearTimeout(timeoutID.current);
      }
      setScrollState(true);

      timeoutID.current = setTimeout(function () {
        setScrollState(false);
      }, 1000);
    });
    return () => {
      window.removeEventListener("scroll", function () {});
    };
  }, []);

  useEffect(() => {
    console.log("yOffset", yOffset);
    if (scrollState) {
      setLastScrollTop(yOffset);
      console.log("lastScrollTop", lastScrollTop);

      if (lastScrollTop > yOffset) {
        setDirection("front");
      } else if (lastScrollTop < yOffset) {
        setDirection("back");
      }
    }
  }, [scrollState, yOffset, lastScrollTop]);

  return (
    <Styled.mainwrapper ref={mainRef}>
      <Styled.progressbarcontainer>
        <Styled.progressbar width={scrollPer * 100}></Styled.progressbar>
      </Styled.progressbarcontainer>
      <Styled.world>
        <Styled.stage>
          <Styled.house ref={houseRef} transform={`translateZ(${zMove}vw)`}>
            <Styled.wallside
              left
              transform={"rotateY(90deg) translateZ(-500vw)"}
            ></Styled.wallside>
            <Styled.wallside
              right
              transform={"rotateY(90deg) translateZ(-400vw)"}
            ></Styled.wallside>
            <Styled.wall front="frontA">
              <Styled.wallcontent>
                <Styled.walltitle>말랑이가 아파요{yOffset}</Styled.walltitle>
              </Styled.wallcontent>
            </Styled.wall>
            <Styled.wall front="frontB">
              <Styled.wallcontent>
                <Styled.walltitle>병원에 찾아갔어요{yOffset}</Styled.walltitle>
              </Styled.wallcontent>
            </Styled.wall>
            <Styled.wall front="frontC">
              <Styled.wallcontent>
                <Styled.walltitle>슬개골 수술을 받았어요</Styled.walltitle>
              </Styled.wallcontent>
            </Styled.wall>
            <Styled.wall frontD>
              <Styled.wallcontent>
                <Styled.walltitle>수술 후 회복하고 있어요</Styled.walltitle>
              </Styled.wallcontent>
            </Styled.wall>
          </Styled.house>
          {direction === "front" && <FrontDog running={scrollState}></FrontDog>}
          {/* <FrontDog animation={scrollPostionState > 90}</FrontDog> }></FrontDog> */}
          {/* <FrontDog animation={running} running={scrollState}></FrontDog> */}
          {direction === "back" && <BackDog running={scrollState}></BackDog>}
        </Styled.stage>
      </Styled.world>
    </Styled.mainwrapper>
  );
};

const mapStateToProps = ({ scroll }) => ({
  yOffset: scroll.yOffset,
  zMove: scroll.zMove,
  maxScrollValue: scroll.maxScrollValue,
});

const mapDispatchToProps = (dispatch) => ({
  updateYOffset: (val) => {
    dispatch(updateYOffset(val));
  },
  updateZMove: (val) => {
    dispatch(updateZMove(val));
  },
  updateMaxScrollValue: (val) => {
    dispatch(updateMaxScrollValue(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
