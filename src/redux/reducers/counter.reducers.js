const counterReducer = (state = 1, action) => {

    switch (action.type) {
        case "INCREASE_COUNTER":
            return state+1
        case "DECREASE_COUNTER":
            return state-1
        case "RESET":
            return state=0
        default:
            return state;
    }
}

export default counterReducer;