import React, { Component } from "react";
import Counter from "./Counter";

class CounterGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { counterCount: this.props.defaultCount, counterSum: 0 };
  }

  regenrateCounters = () => {
    this.setState({ counterCount: this.refs.countInput.value, counterSum: 0 });
  };

  counterUpdateCallback = changedNum => {
    this.setState({ counterSum: this.state.counterSum + changedNum });
  };

  render() {
    let counters = [];
    for (let count = 0; count < this.state.counterCount; count++) {
      counters.push(
        <Counter
          key={count}
          onCounterValueChanged={this.counterUpdateCallback}
        />
      );
    }

    return (
      <div>
        {counters}
        <input type="text" ref="countInput" />
        <button onClick={this.regenrateCounters}>
          Regenerate indicated Counters
        </button>
        <br />
        <span>总和：{this.state.counterSum}</span>
      </div>
    );
  }
}

export default CounterGroup;
