import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);

  let refTime = useRef(0);

  const isStart = useRef(false);

  const active = useRef(false);
  const refInterval = useRef(null);

  const startTimer = () => {
    if (!isStart.current) {
      clearInterval(refInterval.current);

      refInterval.current = setInterval(() => {
        refTime.current = refTime.current + 1;
        setTime(refTime.current);
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
    refTime.current = 0;
    refInterval.current = null;
    isStart.current = false;
    //active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
