import { CATEGORY_ACTION_TYPES } from './category.types';

// Initial state
const CATEGORIES_INITIAL_STATE = {
	categories: [],
	isLoading: false,
	error: null,
};

// category reducer
export const categoryReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START:
			return {
				...state,
				isLoading: true,
			};
		case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
			return {
				...state,
				error: payload,
				isLoading: false,
			};
		case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
			return {
				...state, // rest of values
				isLoading: false, // not loading anymore
				categories: payload,
			};
		default:
			return state;
	}
};
