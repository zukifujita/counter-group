import React, { Component } from "react";
import Counter from "./Counter";

class CounterGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterSum: 0,
      counterArr: new Array(parseInt(this.props.defaultCount))
        .fill(0)
        .map(() => ({ count: 0, id: this.generateID() }))
    };
  }

  generateID = () => {
    return new Date().getTime() + Math.random();
  };

  regenrateCounters = () => {
    this.setState({
      counterArr: new Array(parseInt(this.refs.countInput.value))
        .fill(0)
        .map(() => ({ count: 0, id: this.generateID() })),
      counterSum: 0
    });
  };

  counterUpdateCallback = changedNum => {
    this.setState({ counterSum: this.state.counterSum + changedNum });
  };

  increaseNumber = (changedNum, id) => {
    const changedArr = this.state.counterArr.map(counterItem => {
      if (counterItem.id === id) {
        return { id: id, count: counterItem.count + changedNum };
      } else {
        return counterItem;
      }
    });

    this.setState({ counterArr: [...changedArr] });
  };

  decreaseNumber = (changedNum, id) => {
    const changedArr = this.state.counterArr.map(counterItem => {
      if (counterItem.id === id) {
        return { id: id, count: counterItem.count - changedNum };
      } else {
        return counterItem;
      }
    });

    this.setState({ counterArr: [...changedArr] });
  };

  render() {
    return (
      <div>
        {this.state.counterArr.map(counterItem => (
          <Counter
            key={counterItem.id}
            id={counterItem.id}
            countValue={counterItem.count}
            onCounterValueChanged={this.counterUpdateCallback}
            onClickIncreased={this.increaseNumber}
            onClickDecreased={this.decreaseNumber}
          />
        ))}
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
