import React, { useState } from "react";
import Intro from "./containers/Intro/Intro";
import Main from "./containers/Main/Main";
import Globalstyle from "./styles/GlobalStyles";
// TODO: Font옮기고 파일 삭제하기
import "./App.css";

function App() {
  // const result = useState(false);
  // const isVisibleMain = result[0];
  // const setIsVisibleMain = result[1];
  // const [isVisibleMain, setIsVisibleMain] = useState(false);
  const [isVisibleMain, setIsVisibleMain] = useState(false);
  // [state, setState]

  return (
    <div className="App">
      <Globalstyle />
      {!isVisibleMain && <Intro setIsVisibleMain={setIsVisibleMain} />}
      {isVisibleMain && <Main />}
    </div>
  );
}

export default App;
