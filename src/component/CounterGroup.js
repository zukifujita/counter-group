import React, { Component } from "react";
import Counter from "./Counter";
import { connect } from "react-redux";

class CounterGroup extends Component {
  componentWillMount() {
    this.props.dispatch({
      type: "GENERATECOUNTERS",
      payload: parseInt(this.props.defaultCount)
    });
  }

  generateID = () => {
    return new Date().getTime() + Math.random();
  };

  regenrateCounters = () => {
    this.props.dispatch({
      type: "GENERATECOUNTERS",
      payload: parseInt(this.refs.countInput.value)
    });

    this.props.dispatch({
      type: "CLEARSUM"
    });
  };

  counterUpdateCallback = changedNum => {
    // this.setState({ counterSum: this.state.counterSum + changedNum });
    this.props.dispatch({
      type: "COUNTERSUM",
      payload: changedNum
    });
  };

  increaseNumber = (changedNum, id) => {
    this.props.dispatch({
      type: "INCREASE",
      payload: { changedNum, id }
    });
  };

  decreaseNumber = (changedNum, id) => {
    this.props.dispatch({
      type: "DECREASE",
      payload: { changedNum, id }
    });
  };

  render() {
    return (
      <div>
        {this.props.counterArr.map(counterItem => (
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
        <span>总和：{this.props.counterSum}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counterSum: state.counterSum,
  counterArr: state.counterArr
});

connect(mapStateToProps)(CounterGroup);

export default connect(mapStateToProps)(CounterGroup);
