import { createAction } from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES } from './user.types';

/**
 * REDUCER FCE -> sets current user
 * @param {User | null}  user - user object
 * @returns object with {type,action}
 */
export const setCurrentUser = (user) =>
	createAction(USER_ACTION_TYPES.SET_CURRENT_USER, { currentUser: user });
