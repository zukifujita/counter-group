import React, { Component } from "react";

class Counter extends Component {
  increaseNumber = id => {
    this.props.onIncreased(1, id);
    this.props.onCounterValueChanged(1);
  };

  decreaseNumber = id => {
    this.props.onDecreased(1, id);
    this.props.onCounterValueChanged(-1);
  };

  render() {
    return (
      <div>
        <button onClick={() => this.increaseNumber(this.props.id)}>+</button>
        <span>{this.props.counterNum}</span>
        <button onClick={() => this.decreaseNumber(this.props.id)}>-</button>
      </div>
    );
  }
}

export default Counter;
