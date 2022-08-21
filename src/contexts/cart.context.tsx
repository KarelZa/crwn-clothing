import { createContext, useCallback, useContext, useEffect, useReducer } from 'react';
import CartItem from '../model/cartItem.model';
import Product from '../model/product.model';
import { createAction } from '../utils/reducer/reducer.utils';

interface Props {
	children: React.ReactNode;
}

interface ShoppingCartContextProps {
	isCartOpened: boolean;
	discount: {
		isActivated: boolean;
		discountAmount: number;
	};
	openDropDown: (bool: boolean) => void;
	cartItems: CartItem[];
	addToCart: (item: Product) => void;
	removeFromCart: (item: Product) => void;
	decreaseItemQtyInCart: (item: Product) => void;
	activateDiscount: (bool: boolean, value: number) => void;
	cartItemsPrice: number;
	freeDeliveryThreshold: number;
	cartItemsCount: number;
	dispatch: React.Dispatch<any>;
}

export const ShoppingCartContext = createContext<ShoppingCartContextProps | undefined>(undefined);

/**
 * HELPER FCE -> Adds item into cart
 * @param {CartItem[]}  cartItems - array of items
 * @param {Product}  productToAdd - product to be added into cart
 */
const addCartItem = (cartItems: CartItem[], productToAdd: Product) => {
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
const decreaseCartItem = (cartItems: CartItem[], cartItemToDecreaseQty: Product) => {
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
const clearCartItem = (cartItems: CartItem[], cartItemToRemove: Product) =>
	cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);

export enum CART_ACTION_TYPES {
	SET_IS_CART_OPEN = 'set_is_cart_open',
	SET_CART_ITEMS = 'set_cart_items',
	SET_CART_ITEMS_PRICE = 'set_cart_items_price',
	SET_DISCOUNT = 'set_discount',
}

// cart reducer
const cartReducer = (state: any, action: any) => {
	const { type, payload } = action;
	// console.log(action);

	switch (type) {
		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return {
				...state,
				...payload,
			};
		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
			return {
				...state,
				isCartOpened: payload,
			};
		case CART_ACTION_TYPES.SET_CART_ITEMS_PRICE:
			return {
				...state,
				...payload,
			};
		case CART_ACTION_TYPES.SET_DISCOUNT:
			return {
				...state,
				discount: {
					...payload,
				},
			};
		default:
			throw new Error(`Unhandled Type ${type} in cartReducer`);
	}
};

const INITIAL_STATE = {
	isCartOpened: false,
	cartItems: [],
	cartItemsPrice: 0,
	cartItemsCount: 0,
	discount: {
		isActivated: false,
		discountAmount: 0,
	},
};

/**
 * This component makes the ShoppingCartContext available down the React tree. It should preferably be used at the root of your component tree.
 */
const ShoppingCartContextProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
	const { cartItems, cartItemsPrice, cartItemsCount, isCartOpened, discount } = state;
	const freeDeliveryThreshold = 1200;

	/**
	 * REDUCER FCE -> Updates array of items and its count
	 * @param {CartItem[]}  cartItems - array of items
	 */
	const updateCartItemsReducer = (cartItems: CartItem[]) => {
		const countOfItems = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

		dispatch(
			createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
				cartItems: cartItems,
				cartItemsCount: countOfItems,
			})
		);
	};

	/**
	 * Adds item into cart
	 * @param {Product}  productToAdd - product to be added
	 */
	const addToCart = (productToAdd: Product) => {
		const newCartItems = addCartItem(cartItems, productToAdd);
		updateCartItemsReducer(newCartItems);
	};

	/**
	 * Decreases qty of item inside cart
	 * @param {Product}  cartItemToDecrease - product to be decreased
	 */
	const decreaseItemQtyInCart = (cartItemToDecrease: Product) => {
		const newCartItems = decreaseCartItem(cartItems, cartItemToDecrease);
		updateCartItemsReducer(newCartItems);
	};

	/**
	 * Removes item from cart
	 * @param {Product}  cartItemToRemove - product to be removed from cart
	 */
	const removeFromCart = (cartItemToRemove: Product) => {
		const newCartItems = clearCartItem(cartItems, cartItemToRemove);
		updateCartItemsReducer(newCartItems);
	};

	/**
	 * * REDUCER FCE -> Activates discount for items inside cart
	 * @param {boolean}  bool - false/true to deactivate/activate discount
	 * @param {number}  value - value of the discount
	 */
	const activateDiscount = (bool: boolean, value: number) => {
		dispatch(
			createAction(CART_ACTION_TYPES.SET_DISCOUNT, {
				isActivated: bool,
				discountAmount: value,
			})
		);
	};

	/**
	 * * REDUCER FCE -> Calculates total price of items inside cart
	 */
	const calcCartItemsPrice = useCallback(() => {
		const productsPrice = discount?.isActivated
			? (
					cartItems.reduce(
						(accu: number, curr: CartItem) => accu + curr.price * curr.quantity,
						0
					) * discount.discountAmount
			  ).toFixed()
			: cartItems.reduce(
					(accu: number, curr: CartItem) => accu + curr.price * curr.quantity,
					0
			  );

		dispatch(
			createAction(CART_ACTION_TYPES.SET_CART_ITEMS_PRICE, { cartItemsPrice: productsPrice })
		);
	}, [cartItems, discount]);

	useEffect(() => {
		calcCartItemsPrice();
	}, [calcCartItemsPrice]);

	/**
	 * * REDUCER FCE -> Toggler for visibility of the cart dropdown --> not used yet
	 */
	const openDropDown = (bool: boolean) => {
		dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, { bool }));
	};

	const contextValue = {
		isCartOpened,
		openDropDown,
		cartItems,
		addToCart,
		removeFromCart,
		decreaseItemQtyInCart,
		discount,
		activateDiscount,
		cartItemsPrice,
		cartItemsCount,
		freeDeliveryThreshold,
		dispatch,
	};

	return (
		<ShoppingCartContext.Provider value={contextValue}>{children}</ShoppingCartContext.Provider>
	);
};

/**
 * Custom Hook for cart context API ( throws error if not used inside correct provider)
 */
function useCartContext() {
	const context = useContext(ShoppingCartContext);
	if (context === undefined) {
		throw new Error('useCartContext must be used within a ShoppingCartContextProvider');
	}
	return context;
}

export { ShoppingCartContextProvider, useCartContext };
