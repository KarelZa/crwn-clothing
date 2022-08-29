import { USER_ACTION_TYPES } from './user.types';

// Initial state
const INITIAL_STATE = {
	currentUser: null,
	isLoading: false,
	error: null,
};

// user reducer
export const userReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	// when no type of action has to do with this reducer (no match in switch, no need to update) return current state.
	switch (type) {
		case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
			return {
				...state, // Previous values
				currentUser: payload, // Modification
			};
		case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
			return {
				...state, // Previous values
				currentUser: null, // Modification
			};
		case USER_ACTION_TYPES.SIGN_UP_FAILED:
		case USER_ACTION_TYPES.SIGN_IN_FAILED:
		case USER_ACTION_TYPES.SIGN_UP_FAILED:
			return {
				...state,
				error: payload,
			};

		default:
			return state;
	}
};
