import React, { useState, useRef, useCallback } from "react";
import { useEffect } from "react";
import Styled from "./Main.styles";
import { connect } from "react-redux";
import {
  updateYOffset,
  updateZMove,
  updateMaxScrollValue,
} from "../../modules/scroll";

const Main = ({
  yOffset,
  updateYOffset,
  zMove,
  updateZMove,
  maxScrollValue,
  updateMaxScrollValue,
}) => {
  const [scroll, setScroll] = useState(0);
  const [zmove, setZmove] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1);

  const houseRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    if (mainRef.current) {
      updateMaxScrollValue(mainRef.current.clientHeight - window.innerHeight);
      // setMaxScroll(mainRef.current.clientHeight - window.innerHeight);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainRef.current]);

  const scrollPer = `${yOffset / maxScrollValue}`;
  const test = parseInt(scrollPer + 1000, 10);
  console.log("scrollPer", scrollPer);
  const handleScroll = useCallback(() => {
    updateYOffset(window.pageYOffset);
    // updateZMove(scrollPer);
    updateZMove(test);
    updateZMove(test);
    // setZmove(`{scrollPer}` * 980 - 490);
    // console.log("zmove", zmove);

    // console.log(scrollPer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll]);

  // const handleResize = useCallback(() => {
  //   setMaxScroll(mainRef.current.clientHeight - window.innerHeight);
  // }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // 리사이즈
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [handleResize]);

  useEffect(() => {
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
    <Styled.mainwrapper ref={mainRef}>
      <Styled.progressbarcontainer>
        <Styled.progressbar
          style={{ width: `${scrollPer}` * 100 + "%" }}
        ></Styled.progressbar>
      </Styled.progressbarcontainer>
      <Styled.world>
        <Styled.stage>
          <Styled.house
            ref={houseRef}
            style={{ transform: `translateZ(${zmove}vw)` }}
          >
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
