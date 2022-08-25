import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './root-reducer';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root', // starting / persisting whole app
	storage: storage,
	blacklist: ['user'], // blacklisting user reducer,due to AuthStateListener
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [logger]; // catch action before hits the store and log out the state
const composedEnhancers = compose(applyMiddleware(...middleWares)); // compose allows us to pass multiple fce left to right, functional programing pattern

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store); // persisting store
