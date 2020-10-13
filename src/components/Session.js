import React from "react";

import { BsArrowUp, BsArrowDown } from "react-icons/bs";

const Session = ({
  sessionLength,
  decrementSessionLength,
  incrementSessionLength,
}) => {
  const clockify = () => {
    let min = Math.floor(sessionLength);
    min = min < 10 ? "0" + min : min;
    return min;
  };
  return (
    <div className="float-child">
      <div id="session-label">Session Length</div>

      <div id="session-length" className="h2">
        <button
          className="btn btn-primary"
          id="session-increment"
          onClick={incrementSessionLength}
        >
          <BsArrowUp />
        </button>
        {clockify(sessionLength)}
        <button
          id="session-decrement"
          className="btn btn-danger"
          onClick={decrementSessionLength}
        >
          <BsArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Session;
