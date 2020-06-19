import React, { useState, useRef, useCallback } from "react";
import { useEffect } from "react";
import Styled from "./Main.styles";
import { connect } from "react-redux";
import db from "../../db";
import { updateYOffset, updateMaxScrollValue } from "../../modules/scroll";
import FrontDog from "../../components/MovingDog/FrontDog";
import BackDog from "../../components/MovingDog/BackDog";

const Main = ({
  yOffset,
  updateYOffset,
  zMove,
  scrollPer,
  updateMaxScrollValue,
}) => {
  // console.log(
  //   "db.title",
  //   db.map((item) => item.title)
  // );
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

  const handleScroll = useCallback(() => {
    updateYOffset(window.pageYOffset);
  }, [updateYOffset]);

  const handleResize = useCallback(() => {
    updateMaxScrollValue(mainRef.current.clientHeight - window.innerHeight);
  }, [updateMaxScrollValue]);

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
    if (scrollState) {
      setLastScrollTop(yOffset);

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
                <Styled.walltitle>
                  <h3> {db.map((item) => item.title)}</h3>
                  <p></p>
                </Styled.walltitle>
              </Styled.wallcontent>
            </Styled.wall>
            <Styled.wall front="frontB">
              <Styled.wallcontent>
                <Styled.walltitle>
                  <h3>"언니가 너 안 아프도록 해줄게" </h3>
                  <p>
                    그 날부터 밤새 병원과 수술방법에 대해 알아봤다. 외과 수술
                    경력이 많은 수의사일 것, 입원 기간이 짧을 것, 복용하는 약이
                    많지 않은 곳으로 알아보고 수술을 결정했다.
                  </p>
                </Styled.walltitle>
              </Styled.wallcontent>
            </Styled.wall>
            <Styled.wall front="frontC">
              <Styled.wallcontent>
                <Styled.walltitle>
                  <h3>"말랑아 걸어줘서 고마워" </h3>
                  <p>
                    말랑이는 총 3일 입원했고, 수술 후 2일 째부터 걷기 시작했다.
                    자주 걸을 수록 붕대풀고 회복이 빠르다는 수의사의 말에 매일 2
                    ~ 3회씩 걷도록 닭가슴살로 유혹했다.
                  </p>
                </Styled.walltitle>
              </Styled.wallcontent>
            </Styled.wall>
            <Styled.wall frontD>
              <Styled.wallcontent>
                <Styled.walltitle>
                  <h3>"말랑아 이제 건강해지자" </h3>
                  <p>
                    10일 뒤 붕대를 풀고 그 날부터 산책나가는 시간을 늘렸다. 수술
                    후 3개월이 지난 지금은 기쁘면 방방 뛰고 비둘기 쫓으러
                    뛰어다니는 2살 강아지가 되었다.
                  </p>
                </Styled.walltitle>
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
  scrollPer: scroll.scrollPer,
  maxScrollValue: scroll.maxScrollValue,
});

const mapDispatchToProps = (dispatch) => ({
  updateYOffset: (val) => {
    dispatch(updateYOffset(val));
  },
  updateMaxScrollValue: (val) => {
    dispatch(updateMaxScrollValue(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
