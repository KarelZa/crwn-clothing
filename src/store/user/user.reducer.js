export const USER_ACTION_TYPES = {
	SET_CURRENT_USER: 'set_current_user',
};

// Initial state
const INITIAL_STATE = {
	currentUser: null,
};

// user reducer
export const userReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	// when no type of action has to do with this reducer (no match in switch, no need to update) return current state.
	switch (type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				...state, // Previous values
				...payload, // Modification
			};
		default:
			return state;
	}
};
