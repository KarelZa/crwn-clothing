import { createSelector } from 'reselect';

// basic input selector of cart slice
const selectCartReducer = (state) => state.cart;

// selector of cartItems array
export const selectCartItems = createSelector([selectCartReducer], (cart) => cart.cartItems);

// selector of cart isOpened
export const selectIsCartOpen = createSelector([selectCartReducer], (cart) => cart.isCartOpened);

// selector of cart isOpened
export const selectFreeDeliveryAmount = createSelector(
	[selectCartReducer],
	(cart) => cart.freeDeliveryThreshold
);

export const selectDiscount = createSelector([selectCartReducer], (cart) => cart.discount);

export const selectCountOfItems = createSelector([selectCartItems], (cartItems) => {
	return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
});

export const selectCartItemsPrice = createSelector(
	[selectCartItems, selectDiscount],
	(cartItems, discount) => {
		return discount?.isActivated
			? (
					cartItems.reduce((accu, curr) => accu + curr.price * curr.quantity, 0) *
					discount.discountAmount
			  ).toFixed()
			: cartItems.reduce((accu, curr) => accu + curr.price * curr.quantity, 0);
	}
);

// /**
//  * * REDUCER FCE -> Calculates total price of items inside cart
//  */
// const calcCartItemsPrice = () => {
// 	const productsPrice = discount?.isActivated
// 		? (
// 				cartItems.reduce((accu, curr) => accu + curr.price * curr.quantity, 0) *
// 				discount.discountAmount
// 		  ).toFixed()
// 		: cartItems.reduce((accu, curr) => accu + curr.price * curr.quantity, 0);

// 	dispatch(
// 		createAction(CART_ACTION_TYPES.SET_CART_ITEMS_PRICE, { cartItemsPrice: productsPrice })
// 	);
// };
