import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="world">
        <div className="stage">
          <div className="house">
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
