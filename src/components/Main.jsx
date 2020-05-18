import React, { useState } from "react";
import "./Main.scss";

const Home = () => {
  const [isScroll, setIsScroll] = useState(false);

  return (
    <div className={`home ${isScroll ? "scroll" : ""}`}>
      <div className="logo">개토톱</div>
      <div className="logo__desc">
        <p>슬개골이 아픈 강아지가 치료받기까지 보호자의 마음고생기</p>
      </div>
      <div className="bottom__container" onClick={handleClick}>
        <div className="dog__face">
          <div className="button__text">이야기 듣기</div>
        </div>
      </div>
    </div>
  );

  function handleClick() {
    setIsScroll(true);
  }
};

export default Home;
