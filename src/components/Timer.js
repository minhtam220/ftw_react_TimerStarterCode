import React from "react";
import useTimer from "../useTimer";
import Display from "./Display";

function Timer({ title }) {
  const {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    splitTimer,
    active,
    splitTimes,
  } = useTimer();

  return (
    <div>
      <h1>{title}</h1>
      <div className="timer__wrapper">
        {splitTimes.current.map((time) => (
          <Display time={time} />
        ))}
        <Display time={time} />
        <div className="button__wrapper">
          <button className="button" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
          <button className="button" onClick={splitTimer}>
            Split
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
