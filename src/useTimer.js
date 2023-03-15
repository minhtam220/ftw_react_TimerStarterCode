import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);

  const isStart = useRef(false);
  const active = useRef(false);
  const refInterval = useRef(null);

  const startTimer = () => {
    if (!isStart.current) {
      let currentTime = 0;

      clearInterval(refInterval.current);

      refInterval.current = setInterval(() => {
        currentTime = currentTime + 1;
        setTime(currentTime);
      }, 1000);

      isStart.current = true;
    }

    //active.current.disabled = true;
  };

  const stopTimer = () => {
    //"Your code here";
    clearInterval(refInterval.current);
    //isStart.current = false;
  };

  const resetTimer = () => {
    setTime(0);
    clearInterval(refInterval.current);
    refInterval.current = null;
    isStart.current = false;
    //active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
