import React from "react";
import "./Main.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="logo">개토톱</div>
      <div className="logo__desc">
        <p>슬개골이 아픈 강아지가 치료받기까지 보호자의 마음고생기</p>
      </div>
      <div className="bottom__container">
        <div className="dog__face">
          <div className="button__text">이야기 듣기</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
