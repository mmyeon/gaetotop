import React from "react";
import "./Header.scss";

const Home = () => {
  return (
    <div className="header-container">
      <div className="logo">개토톱</div>
      <ul className="menu-container">
        <li>강아지 말랑이</li>
        <li>수술 전</li>
        <li>수술 직후 </li>
        <li>회복</li>
      </ul>
    </div>
  );
};

export default Home;
