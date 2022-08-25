import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './root-reducer';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Logger adds extra functionality to dispatch method -> catch action before hits the store and log out the state
const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);
const composeEnhancer =
	compose(
		process.env.NODE_ENV !== 'production' &&
			window &&
			window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

const persistConfig = {
	key: 'root', // starting / persisting whole app
	storage: storage,
	blacklist: ['user'], // blacklisting user reducer,due to AuthStateListener
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store); // persisting store
