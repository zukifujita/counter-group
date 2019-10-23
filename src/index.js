import React from "react";
import ReactDOM from "react-dom";
import CounterGroup from "./container/CounterGroupContainer";
import reducer from "./reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <CounterGroup defaultCount="3"/>
    </Provider>,
    document.getElementById("root")
);