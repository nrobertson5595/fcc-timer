import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { BsClock } from "react-icons/bs";

import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";

const App = () => {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);

  const decrementSessionLength = () => {
    const newSessionLength = sessionLength - 1;
    if (newSessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLength);
    }
  };

  const incrementSessionLength = () => {
    setSessionLength(sessionLength + 1);
  };

  const decrementBreakLength = () => {
    const newBreakLength = breakLength - 1;
    if (newBreakLength < 0) {
      setBreakLength(0);
    } else {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreakLength = () => {
    setBreakLength(breakLength + 1);
  };

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <Card bg={"dark"} style={{ width: "40rem" }} className="mb-2">
        <Card.Header>
          <div className="float-container">
            <Break
              breakLength={breakLength}
              decrementBreakLength={decrementBreakLength}
              incrementBreakLength={incrementBreakLength}
            />
            <Session
              sessionLength={sessionLength}
              decrementSessionLength={decrementSessionLength}
              incrementSessionLength={incrementSessionLength}
            />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {" "}
            <div id="timer-label">
              <BsClock />
            </div>{" "}
          </Card.Title>
          <Card.Text>
            <TimeLeft sessionLength={sessionLength} />

            <button id="reset" className="btn btn-info">
              reset
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default App;
