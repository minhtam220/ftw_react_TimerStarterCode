import { useState, useRef } from "react";
import { formatTime } from "./utils/formatTime";
import useTimer from "./useTimer";
import Timer from "./components/Timer";

function App() {
  //const { time, startTimer, stopTimer, resetTimer, active } = useTimer(0);

  return (
    <div className="App container">
      <Timer />
      <Timer />
      <Timer />
    </div>
  );
}

export default App;
