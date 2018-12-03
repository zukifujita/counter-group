import React, { Component } from 'react';
import Counter from './Counter';

class CounterGroup extends Component {
    constructor(props) {
        super(props);
        this.state = { counterCount: this.props.defaultCount }
    }

    regenrateCounters = ()=>{
        this.setState({counterCount: this.refs.countInput.value})
    }

    render() { 
        let counters=[];
        for(let count =0; count < this.state.counterCount; count ++){
            counters.push(<Counter key={count}></Counter>)
        }
        
        return ( <div>
                {counters}
                <input type="text" ref="countInput"></input>
                <button onClick={this.regenrateCounters}>Regenerate indicated Counters</button>
            </div> );
    }
}
 
export default CounterGroup;