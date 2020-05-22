import React, { useState } from "react";
import Intro from "./components/Intro";
import Main from "./components/Main";
// import Progressbar from "./components/Progressbar";

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
      {!isVisibleMain && <Intro setIsVisibleMain={setIsVisibleMain} />}
      {isVisibleMain && <Main />}
      {/* <Progressbar /> */}
    </div>
  );
}

export default App;
