import { combineReducers } from "redux";
import data from "./weatherReducer";

const reducers = combineReducers({
    data: data
});

export default reducers;