import { CART_ACTION_TYPES } from './cart.types';

const CART_INITIAL_STATE = {
	isCartOpened: false,
	cartItems: [],
	freeDeliveryThreshold: 1200,
	discount: {
		isActivated: false,
		discountAmount: 0,
	},
};

// cart reducer
export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
	const { type, payload } = action;
	// console.log(action);

	switch (type) {
		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return {
				...state,
				cartItems: payload,
			};
		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
			return {
				...state,
				isCartOpened: payload,
			};
		case CART_ACTION_TYPES.SET_DISCOUNT:
			return {
				...state,
				discount: {
					...payload,
				},
			};
		default:
			return state;
	}
};
