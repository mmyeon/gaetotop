import React from "react";
import DogAnimation from "./DogAnimation";
// import Movingdog from "./Movingdog";
import "./Intro.scss";

// props = {
//   setIsVisibleMain: 함수
// };

// const setIsVisibleMain = props.setIsVisibleMaind;

// const Home = (props) => {
const Home = ({ setIsVisibleMain }) => {
  return (
    <div className="home">
      <div className="logo">개토톱</div>
      <div className="logo__desc">
        <p>슬개골이 아픈 강아지가 치료받기까지 보호자의 마음고생기</p>
      </div>
      <div className="bottom__container" onClick={handleClick}>
        <div className="dog__face">
          {/* <div className="button__text">이야기 듣기</div> */}
          Go
        </div>
      </div>
      {/* <Movingdog /> */}
      <DogAnimation />
    </div>
  );

  function handleClick() {
    // props.setIsVisibleMain(true);
    setIsVisibleMain(true);
  }
};

export default Home;
