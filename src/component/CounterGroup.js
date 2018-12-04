import React, { Component } from "react";
import Counter from "./Counter";

class CounterGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterSum: 0,
      counters: new Array(parseInt(this.props.defaultCount)).fill(0).map(() => {
        return { number: 0, id: new Date().getTime + Math.random() };
      })
    };
  }

  regenrateCounters = () => {
    this.setState({
      counters: new Array(parseInt(this.refs.countInput.value))
        .fill(0)
        .map(() => {
          return { number: 0, id: new Date().getTime + Math.random() };
        }),
      counterSum: 0
    });
  };

  counterUpdateCallback = changedNum => {
    this.setState({ counterSum: this.state.counterSum + changedNum });
  };

  increaseUpdate = (changedNum, id) => {
    const counters = this.state.counters.map(counterItem => {
      if (counterItem.id === id) {
        return { number: counterItem.number + changedNum, id: id };
      } else {
        return counterItem;
      }
    });

    this.setState({ counters: counters });
  };

  decreaseUpdate = (changedNum, id) => {
    const counters = this.state.counters.map(counterItem => {
      if (counterItem.id === id) {
        return { number: counterItem.number - changedNum, id: id };
      } else {
        return counterItem;
      }
    });

    this.setState({ counters: counters });
  };

  render() {
    console.log(this.state.counters);
    return (
      <div>
        {this.state.counters.map(counterItem => (
          <Counter
            key={counterItem.id}
            id={counterItem.id}
            onCounterValueChanged={this.counterUpdateCallback}
            onIncreased={this.increaseUpdate}
            counterNum={counterItem.number}
            onDecreased={this.decreaseUpdate}
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
