import { combineReducers } from "redux";
import counterReducer from './counter.reducers'

const allReducers = combineReducers({
    counterReducer
})

export default allReducers;