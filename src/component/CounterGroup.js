import React, { Component } from "react";
import Counter from "./Counter";

export default class CounterGroup extends Component {
  componentWillMount() {
    this.props.genrateCounters(this.props.defaultCount);
  }

  regenrateCounters = () => {
    this.props.genrateCounters(this.refs.countInput.value);
    this.props.clearCounterSum();
  };

  render() {
    return (
      <div>
        {this.props.counterArr.map(counterItem => (
          <Counter
            key={counterItem.id}
            id={counterItem.id}
            countValue={counterItem.count}
            onCounterValueChanged={this.props.counterUpdateCallback}
            onClickIncreased={this.props.increaseNumber}
            onClickDecreased={this.props.decreaseNumber}
          />
        ))}
        <input type="text" ref="countInput" />
        <button onClick={this.regenrateCounters}>
          Regenerate indicated Counters
        </button>
        <br />
        <span>总和：{this.props.counterSum}</span>
      </div>
    );
  }
}


