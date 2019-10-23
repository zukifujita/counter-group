import React, {Component} from "react";
import Counter from "./Counter";

export default class CounterGroup extends Component {
    componentWillMount() {
        this.props.generateCounters(this.props.defaultCount);
    }

    regenerateCounters = () => {
        this.props.generateCounters(this.refs.countInput.value);
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
                <input type="text" ref="countInput"/>
                <button onClick={this.regenerateCounters}>
                    Regenerate indicated Counters
                </button>
                <br/>
                <span>Sum ：{this.props.counterSum}</span>
            </div>
        );
    }
}


