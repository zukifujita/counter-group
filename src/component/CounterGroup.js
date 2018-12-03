import React, { Component } from "react";
import Counter from "./Counter";

class CounterGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterSum: 0,
      countItem: { count: 0, id: this.generateID() },
      counterArr: new Array(parseInt(this.props.defaultCount))
        .fill(0)
        .map(() => {})
    };
  }

  generateID = () => {
    return new Date().getTime() + Math.random();
  };

  regenrateCounters = () => {
    this.setState({
      counterArr: new Array(parseInt(this.refs.countInput.value)).fill(0),
      counterSum: 0
    });
  };

  counterUpdateCallback = changedNum => {
    this.setState({ counterSum: this.state.counterSum + changedNum });
  };

  increaseNumber = (changedNum, id) => {
    this.setState({
      countItem: { count: this.state.countItem.count + changedNum }
    });
  };

  decreaseNumber = (changedNum, id) => {
    this.setState({
      countItem: { count: this.state.countItem.count - changedNum }
    });
  };

  render() {
    return (
      <div>
        {this.state.counterArr.map(c => (
          <Counter
            key={this.state.countItem.id}
            countValue={this.state.countItem.count}
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
