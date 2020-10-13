import React from "react";

import { BsArrowUp, BsArrowDown } from "react-icons/bs";

const Break = ({ breakLength, incrementBreakLength, decrementBreakLength }) => {
  return (
    <div className="float-child">
      <div id="break-label">Break Length</div>

      <div id="break-length" className="h2">
        <button
          id="break-increment"
          className="btn btn-primary"
          onClick={incrementBreakLength}
        >
          <BsArrowUp />
        </button>
        {breakLength}
        <button
          id="break-decrement"
          className="btn btn-danger"
          onClick={decrementBreakLength}
        >
          <BsArrowDown />
        </button>
      </div>
    </div>
  );
};
export default Break;
