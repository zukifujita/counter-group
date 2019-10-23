const initialState = {
    counterSum: 0,
    counterArr: []
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "INCREASE":
            const changedIncreaseArr = state.counterArr.map(counterItem => {
                if (counterItem.id === payload.id) {
                    return {
                        id: payload.id,
                        count: counterItem.count + payload.changedNum
                    };
                } else {
                    return counterItem;
                }
            });
            return { ...state, counterArr: [...changedIncreaseArr] };

        case "DECREASE":
            const changedDecreaseArr = state.counterArr.map(counterItem => {
                if (counterItem.id === payload.id) {
                    return {
                        id: payload.id,
                        count: counterItem.count - payload.changedNum
                    };
                } else {
                    return counterItem;
                }
            });
            return { ...state, counterArr: [...changedDecreaseArr] };
        case "COUNTER_SUM":
            return { ...state, counterSum: state.counterSum + payload };
        case "CLEAR_SUM":
            return { ...state, counterSum: 0 };
        case "GENERATE_COUNTER":
            return {
                ...state,
                counterArr: new Array(parseInt(payload))
                    .fill(0)
                    .map(() => ({ count: 0, id: generateID() }))
            };
        default:
            return state;
    }
};

const generateID = () => {
    return new Date().getTime() + Math.random();
};
