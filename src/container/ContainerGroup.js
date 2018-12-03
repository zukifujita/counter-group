import { connect } from "react-redux";
import CounterGroup from "../component/CounterGroup";

const mapStateToProps = state => ({
  counterSum: state.counterSum,
  counterArr: state.counterArr
});

const mapDispatchToProps = dispatch => ({
  decreaseNumber: (changedNum, id) =>
    dispatch({
      type: "INCREASE",
      payload: { changedNum, id }
    }),
  increaseNumber: (changedNum, id) =>
    dispatch({
      type: "INCREASE",
      payload: { changedNum, id }
    }),
  counterUpdateCallback: changedNum =>
    dispatch({
      type: "COUNTERSUM",
      payload: changedNum
    }),
  genrateCounters: counterNum =>
    dispatch({
      type: "GENERATECOUNTERS",
      payload: parseInt(counterNum)
    }),
  clearCounterSum: () =>
    dispatch({
      type: "CLEARSUM"
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterGroup);
