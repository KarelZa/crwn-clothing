import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [logger]; // catch action before hits the store and log out the state
const composedEnhancers = compose(applyMiddleware(...middleWares)); // compose allows us to pass multiple fce left to right, functional programing pattern

export const store = createStore(rootReducer, undefined, composedEnhancers);
