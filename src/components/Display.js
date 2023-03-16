import React from "react";
import { formatTime } from "../utils/formatTime";

function Display({ time, active }) {
  return (
    <div className="timer__display">
      <p>{formatTime(time)}</p>
    </div>
  );
}

export default Display;
