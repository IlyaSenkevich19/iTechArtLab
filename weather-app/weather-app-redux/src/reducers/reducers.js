import { combineReducers } from "redux";

import {informReducer} from "./informReducer"

const reducers = combineReducers({
    data: informReducer,
});

export default reducers;