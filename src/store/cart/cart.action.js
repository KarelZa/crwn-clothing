import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';

/**
 * * Action fce -> Toggler for visibility of the cart dropdown --> not used yet
 */
export const openDropDown = (bool) => {
	createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);
};

/**
 * * Action fce -> Activates discount for items inside cart
 * @param {boolean}  bool - false/true to deactivate/activate discount
 * @param {number}  value - value of the discount
 */
export const activateDiscount = (bool, value) =>
	createAction(CART_ACTION_TYPES.SET_DISCOUNT, {
		isActivated: bool,
		discountAmount: value,
	});

/**
 * Adds item into cart
 * @param {CartItem[]}  cartItems - array of cart items
 * @param {Product}  productToAdd - product to be added
 */
export const addToCart = (cartItems, productToAdd) => {
	const newCartItems = addCartItem(cartItems, productToAdd);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

/**
 * Decreases qty of item inside cart
 * @param {CartItem[]}  cartItems - array of cart items
 * @param {Product}  cartItemToDecrease - product to be decreased
 */
export const decreaseItemQtyInCart = (cartItems, cartItemToDecrease) => {
	const newCartItems = decreaseCartItem(cartItems, cartItemToDecrease);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

/**
 * Removes item from cart
 * @param {CartItem[]}  cartItems - array of cart items
 * @param {Product}  cartItemToRemove - product to be removed from cart
 */
export const removeFromCart = (cartItems, cartItemToRemove) => {
	const newCartItems = clearCartItem(cartItems, cartItemToRemove);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

/**
 * HELPER FCE -> Adds item into cart
 * @param {CartItem[]}  cartItems - array of items
 * @param {Product}  productToAdd - product to be added into cart
 */
const addCartItem = (cartItems, productToAdd) => {
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	} else {
		return [...cartItems, { ...productToAdd, quantity: 1 }];
	}
};

/**
 * HELPER FCE -> decreases item quantity inside cart
 * @param {CartItem[]}  cartItems - array of items
 * @param {Product}  cartItemToDecreaseQty - product inside cart that's quantity will be decreased
 */
const decreaseCartItem = (cartItems, cartItemToDecreaseQty) => {
	// find the cart item to remove
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToDecreaseQty.id);

	// check if quantity is equal to 1, if it is remove that item from the cart
	if (existingCartItem?.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToDecreaseQty.id);
	}

	// return back cartitems with matching cart item with reduced quantity
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToDecreaseQty.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

/**
 * HELPER FCE -> removes item from cart
 * @param {CartItem[]}  cartItems - array of items
 * @param {Product}  cartItemToRemove - product inside cart that will be removed
 */
const clearCartItem = (cartItems, cartItemToRemove) =>
	cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
