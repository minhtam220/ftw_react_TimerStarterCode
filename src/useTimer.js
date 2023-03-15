import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);

  const isStart = useRef(false);
  const active = useRef(false);
  const refInterval = useRef(1000);

  const startTimer = () => {
    setInterval(setTime(time + 1), 1000);
    active.current.disabled = true;
  };

  const stopTimer = () => {
    //"Your code here";
  };
  const resetTimer = () => {
    //"Your code here";
    active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
