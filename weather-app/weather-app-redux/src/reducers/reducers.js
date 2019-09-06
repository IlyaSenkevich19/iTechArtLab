import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import informReducer from "./informReducer"


const reducers = combineReducers({
    data: informReducer,
    weather: weatherReducer
});

export default reducers;