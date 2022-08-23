import { createSelector } from 'reselect';

const countOfItemsReducer = (state) => state.cart;

export const selectCountOfItems =
	([countOfItemsReducer], (cartItemsSlice) => cartItemsSlice.cartItems);

const countOfItems = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
