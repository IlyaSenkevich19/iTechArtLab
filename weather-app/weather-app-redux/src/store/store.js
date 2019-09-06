import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers/reducers'

const middleware = applyMiddleware(logger, thunk);

const store = createStore(reducers, middleware);

export default store;