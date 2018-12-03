const initialState = { count: 0 };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "INCREASE":
      return { count: state.count + 1 };

    case "DECREASE":
      return { count: state.count - 1 };

    default:
      return state;
  }
};
