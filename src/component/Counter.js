import React, { Component } from "react";

class Counter extends Component {

  increaseNumber = () => {
    this.props.onIncreased(1);
    this.props.onCounterValueChanged(1);
  };

  decreaseNumber = () => {
    this.props.onDecreased(1);
    this.props.onCounterValueChanged(-1);
  };

  render() {
    return (
      <div>
        <button onClick={this.increaseNumber}>+</button>
        <span>{this.props.counterNum}</span>
        <button onClick={this.decreaseNumber}>-</button>
      </div>
    );
  }
}

export default Counter;
