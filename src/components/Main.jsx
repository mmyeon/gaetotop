import React, { useState, useRef, useCallback } from "react";
import { useEffect } from "react";
import "./Main.scss";

const Main = () => {
  const [scroll, setScroll] = useState(0);
  const [zmove, setZmove] = useState(0);
  const [maxScrollValue, setMaxScrollValue] = useState(1);

  const houseRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    if (mainRef.current) {
      // const maxScrollValue = mainRef.current.clientHeight - innerHeight;
      setMaxScrollValue(mainRef.current.clientHeight - window.innerHeight);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainRef.current]);

  const handleScroll = useCallback(() => {
    setScroll(window.pageYOffset);
    setZmove((scroll / maxScrollValue) * 980 - 490);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="main" ref={mainRef}>
      <div className="world">
        {/* 캐릭터와 하우스를 감싸는 stage */}
        <div className="stage">
          <div
            className="house"
            style={{
              transform: `translateZ(${zmove}vw)`,
            }}
            ref={houseRef}
          >
            <section className="wall wall-left"></section>
            <section className="wall wall-right"></section>
            <section className="wall wall-front wall-front-a">
              <div className="wall-content">
                <h2 className="wall-title">말랑이가 아파요</h2>
              </div>
            </section>
            <section className="wall wall-front wall-front-b">
              <div className="wall-content">
                <h2 className="wall-title">병원에 찾아갔어요</h2>
              </div>
            </section>
            <section className="wall wall-front wall-front-c">
              <div className="wall-content">
                <h2 className="wall-title">슬개골 수술을 받았어요</h2>
              </div>
            </section>
            <section className="wall wall-front wall-front-d">
              <div className="wall-content">
                <h2 className="wall-title">수술 후 회복하고 있어요</h2>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
