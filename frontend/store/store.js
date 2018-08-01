import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';

// let middleware = [thunk];
// if (process.env.NODE_ENV !== 'production') {
//   const logger = require('redux-logger');
//   middleware = [...middleware, logger];
// }

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    // applyMiddleware(...middleware)
    applyMiddleware(thunk, logger)
  );
};

export default configureStore;
