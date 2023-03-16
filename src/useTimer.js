import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);

  const isStart = useRef(false);
  const active = useRef(false);
  const refInterval = useRef(null);

  const splitTimes = useRef([]);

  const startTimer = () => {
    /* TAM'S CODES
    //check if Timer is not running
    if (active.current === false) {
      //start the Timer
      refInterval.current = setInterval(() => {
        refTime.current = refTime.current + 1;
        setTime(refTime.current);
      }, 1000);
      //set the flag that Timer is running
      active.current = true;
    }*/

    active.current.disabled = true;
    isStart.current = true;
    refInterval.current = setInterval(() => {
      if (isStart.current) {
        setTime((time) => time + 1);
      }
    }, 100);
  };

  const stopTimer = () => {
    /*TAM's CODES
    //stop the Timer
    clearInterval(refInterval.current);
    //set the flag that Timer is not running
    active.current = false;
    */

    isStart.current = false;
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };

  const resetTimer = () => {
    /* TAM's CODES
    //stop the Timer
    clearInterval(refInterval.current);
    refInterval.current = null;
    //set the flag that Timer is not running
    active.current = false;
    //reset the Time
    setTime(0);
    refTime.current = 0;
    */

    setTime(0);
    clearInterval(refInterval.current);
    active.current.disabled = false;
    splitTimes.current = [];
  };

  const splitTimer = () => {
    splitTimes.current.push(time);
    console.log(splitTimes.current);
  };

  return {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    splitTimer,
    active,
    splitTimes,
  };
};
export default useTimer;
