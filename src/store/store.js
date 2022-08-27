import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootSaga } from './root-saga';
import createSagaMiddleware from '@redux-saga/core';
import logger from 'redux-logger'; // Logger adds extra functionality to dispatch method -> catch action before hits the store and log out the state

// MiddleWares
const sagaMiddleware = createSagaMiddleware();

const middleWares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(
	Boolean
);
const composeEnhancer =
	compose(
		process.env.NODE_ENV !== 'production' &&
			window &&
			window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	) || compose;
// composed with redux devtools extension
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

const persistConfig = {
	key: 'root', // starting / persisting whole app
	storage: storage,
	blacklist: ['user'], // blacklisting user reducer,due to AuthStateListener
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composedEnhancers);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store); // persisting store
