import React, { useEffect, useState } from "react";
import { BsPlay, BsPause } from "react-icons/bs";

const TimeLeft = ({ sessionLength }) => {
  const [intervalId, setintervalId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);
  const clockify = () => {
    let min = Math.floor(timeLeft / 60);
    let sec = timeLeft - min * 60;
    sec = sec < 10 ? "0" + sec : sec;
    min = min < 10 ? "0" + min : min;
    return min + ":" + sec;
  };

  const isStarted = intervalId !== null;

  const handleStartStopClick = () => {
    if (isStarted) {
      clearInterval(intervalId);
      setintervalId(null);
    } else {
      const newInterval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          const newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft >= 0) {
            return prevTimeLeft - 1;
          }
          return prevTimeLeft;
        });
      }, 1000);
      setintervalId(newInterval);
    }
  };

  return (
    <div className="h1">
      <div id="time-left">{clockify(timeLeft)}</div>
      <button
        id="start_stop"
        className="btn btn-warning"
        onClick={handleStartStopClick}
      >
        <BsPlay />/<BsPause />
      </button>
    </div>
  );
};

export default TimeLeft;
