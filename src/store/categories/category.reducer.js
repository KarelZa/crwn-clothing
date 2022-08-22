import { CATEGORY_ACTION_TYPES } from './category.types';

// Initial state
const CATEGORIES_INITIAL_STATE = {
	categories: {},
};

// category reducer
export const categoryReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP:
			return {
				...state, // Previous values
				...payload, // Modification
			};
		default:
			return state;
	}
};
