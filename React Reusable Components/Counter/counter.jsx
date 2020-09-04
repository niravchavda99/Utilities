import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    const value = this.state.value - 1;
    this.setState({ value: value < 0 ? 0 : value });
  };

  formatvalue = () => {
    const { value } = this.state;
    return value <= 0 ? "Zero" : value;
  };

  render() {
    const { value } = this.state;
    return (
      <div className="counter">
        <div className="counter-value">{this.formatvalue()}</div>
        <i
          onClick={this.handleDecrement}
          className="fa fa-minus-circle counter-button"
          aria-hidden="true"
        ></i>
        <i
          onClick={this.handleIncrement}
          className="fa fa-plus-circle counter-button"
          aria-hidden="true"
        ></i>
      </div>
    );
  }
}

export default Counter;
