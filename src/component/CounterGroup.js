import React, { Component } from 'react';
import Counter from './Counter';

class CounterGroup extends Component {
    constructor(props) {
        super(props);
        this.state = { counterCount: this.props.defaultCount }
    }
    render() { 
        let counters=[];
        for(let count =0; count < this.props.defaultCount; count ++){
            counters.push(<Counter key={count}></Counter>)
        }

        return ( <div>
                {counters}
            </div> );
    }
}
 
export default CounterGroup;