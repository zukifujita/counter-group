const initialState = {
  counterSum: 0,
  counterArr: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "COUNTERSUM":
      console.log(payload);
      return { ...state, counterSum: state.counterSum + payload };
    case "GENERATECOUNTERS":
      return {
        ...state,
        counterArr: new Array(parseInt(payload))
          .fill(0)
          .map(() => ({ count: 0, id: generateID() }))
      };
    case "INCREASE":
      console.log(state.counterArr);
      const changedArr = state.counterArr.map(counterItem => {
        if (counterItem.id === payload.id) {
          return {
            id: payload.id,
            count: counterItem.count + payload.changedNum
          };
        } else {
          return counterItem;
        }
      });

      return { ...state, counterArr: [...changedArr] };
    default:
      return state;
  }
};

const generateID = () => {
  return new Date().getTime() + Math.random();
};
