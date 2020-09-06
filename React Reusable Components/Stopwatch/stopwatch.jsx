import React, { Component } from "react";
import "./style.css";

class Stopwatch extends Component {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    startDisabled: false,
    pauseDisabled: true,
    resetDisabled: true,
    timerId: undefined,
  };

  pad = (num, size = 2) => {
    let str = num + "";
    while (str.length < size) str = "0" + str;
    return str.substr(0, 2);
  };

  getTime = () => {
    const { hours, minutes, seconds, milliseconds } = this.state;
    return (
      this.pad(hours) +
      ":" +
      this.pad(minutes) +
      ":" +
      this.pad(seconds) +
      ":" +
      this.pad(milliseconds)
    );
  };

  increment = () => {
    let { hours, minutes, seconds, milliseconds } = this.state;
    milliseconds += 10;
    if (milliseconds > 999) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds > 59) {
      seconds = 0;
      minutes++;
    }
    if (minutes > 59) {
      minutes = 0;
      hours++;
    }
    this.setState({ hours, minutes, seconds, milliseconds });
  };

  start = (e) => {
    var timerId = setInterval(this.increment, 10);

    this.setState({
      timerId,
      pauseDisabled: false,
      startDisabled: true,
      resetDisabled: true,
    });
  };

  pause = () => {
    clearInterval(this.state.timerId);

    this.setState({
      timerId: undefined,
      startDisabled: false,
      resetDisabled: false,
      pauseDisabled: true,
    });
  };

  reset = () => {
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      resetDisabled: true,
      startDisabled: false,
      pauseDisabled: true,
    });
  };

  render() {
    const { startDisabled, pauseDisabled, resetDisabled } = this.state;
    return (
      <div className="stopwatch">
        <div className="stopwatch-body">
          <div className="stopwatch-text">{this.getTime()}</div>
        </div>
        <div className="stopwatch-buttons">
          <button
            disabled={startDisabled}
            onClick={this.start}
            className="stopwatch-btn stopwatch-btn-start"
          >
            Start
          </button>
          <button
            disabled={pauseDisabled}
            onClick={this.pause}
            className="stopwatch-btn stopwatch-btn-pause"
          >
            Pause
          </button>
          <button
            disabled={resetDisabled}
            onClick={this.reset}
            className="stopwatch-btn stopwatch-btn-reset"
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
