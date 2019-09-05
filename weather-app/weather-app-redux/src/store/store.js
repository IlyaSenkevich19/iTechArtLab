import { appluMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers/reducers'

const middleware = appluMiddleware(logger, thunk);

const store = createStore(reducers, middleware);

export default store;