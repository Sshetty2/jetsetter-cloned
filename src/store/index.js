import { createStore, applyMiddleware, compose } from 'redux';

import reducers from '../reducers';
import initialState from './initial-state';

// import { composeWithDevTools } from 'redux-devtools-extension';

// createStore(
//   reducers,
//   initialState
// );
const middleware = []
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  initialState, 
  composeEnhancers(
  applyMiddleware(...middleware), ...enhancers
  // other store enhancers if any
));