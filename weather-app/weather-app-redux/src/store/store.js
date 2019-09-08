import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  reducers  from '../reducers/reducers.js'
import logger from 'redux-logger';


const store = createStore(reducers, applyMiddleware(thunk, logger));


export default store;


