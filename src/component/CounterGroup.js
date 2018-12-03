import React, { Component } from 'react';
import Counter from './Counter';

class CounterGroup extends Component {
    constructor(props) {
        super(props);
        this.state = { counterCount: 1 }
    }
    render() { 
        return ( <div>
                <Counter></Counter>
                <Counter></Counter>
                <Counter></Counter>
            </div> );
    }
}
 
export default CounterGroup;