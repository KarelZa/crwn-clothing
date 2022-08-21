import { createContext, useCallback, useContext, useEffect, useReducer } from 'react';
import CartItem from '../model/cartItem.model';
import Product from '../model/product.model';

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
// default values of context
export const ShoppingCartContext = createContext<ShoppingCartContextProps | undefined>(undefined);

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

const decreaseCartItem = (cartItems: CartItem[], cartItemToRemove: Product) => {
	// find the cart item to remove
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

	// check if quantity is equal to 1, if it is remove that item from the cart
	if (existingCartItem?.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	// return back cartitems with matching cart item with reduced quantity
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

const clearCartItem = (cartItems: CartItem[], cartItemToRemove: Product) =>
	cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);

export enum CART_ACTION_TYPES {
	SET_IS_CART_OPEN = 'set_is_cart_open',
	SET_CART_ITEMS = 'set_cart_items',
	SET_CART_ITEMS_PRICE = 'set_cart_items_price',
	SET_DISCOUNT = 'set_discount',
}

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

const ShoppingCartContextProvider = ({ children }: Props) => {
	const freeDeliveryThreshold = 1200;
	const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
	const { cartItems, cartItemsPrice, cartItemsCount, isCartOpened, discount } = state;

	const updateCartItemsReducer = (cartItems: CartItem[]) => {
		const countOfItems = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

		dispatch({
			type: CART_ACTION_TYPES.SET_CART_ITEMS,
			payload: {
				cartItems: cartItems,
				cartItemsCount: countOfItems,
			},
		});
	};

	const addToCart = (productToAdd: Product) => {
		const newCartItems = addCartItem(cartItems, productToAdd);
		updateCartItemsReducer(newCartItems);
	};

	const decreaseItemQtyInCart = (cartItemToDecrease: Product) => {
		const newCartItems = decreaseCartItem(cartItems, cartItemToDecrease);
		updateCartItemsReducer(newCartItems);
	};

	const removeFromCart = (cartItemToRemove: Product) => {
		const newCartItems = clearCartItem(cartItems, cartItemToRemove);
		updateCartItemsReducer(newCartItems);
	};

	const activateDiscount = (bool: boolean, value: number) => {
		dispatch({
			type: CART_ACTION_TYPES.SET_DISCOUNT,
			payload: {
				isActivated: bool,
				discountAmount: value,
			},
		});
	};

	const calcCartItemsPriceReducer = useCallback(() => {
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

		dispatch({
			type: CART_ACTION_TYPES.SET_CART_ITEMS_PRICE,
			payload: {
				cartItemsPrice: productsPrice,
			},
		});
	}, [cartItems, discount]);

	useEffect(() => {
		calcCartItemsPriceReducer();
	}, [calcCartItemsPriceReducer]);

	// Toggler for Quick Cart View
	const openDropDown = (bool: boolean) => {
		dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool });
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

// custom Hook with context ( checks for undefined if not used inside correct provider)
function useCartContext() {
	const context = useContext(ShoppingCartContext);
	if (context === undefined) {
		throw new Error('useCartContext must be used within a ShoppingCartContextProvider');
	}
	return context;
}

export { ShoppingCartContextProvider, useCartContext };
