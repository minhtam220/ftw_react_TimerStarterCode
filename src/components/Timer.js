import React from "react";
import { formatTime } from "../utils/formatTime";
import useTimer from "../useTimer";

function Timer() {
  const { time, startTimer, stopTimer, resetTimer, active } = useTimer(0);

  return (
    <div>
      <h1>Coder Timer 1</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
