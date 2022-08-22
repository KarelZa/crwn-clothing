import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
	user: userReducer, // key-value, user: actual state of given reducer
});
