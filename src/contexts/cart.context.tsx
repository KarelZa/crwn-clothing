import { createContext, useContext, useEffect, useState } from 'react';
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
	openDropDown: () => void;
	cartItems: CartItem[];
	addToCart: (item: Product) => void;
	removeFromCart: (item: Product) => void;
	decreaseCartItemQty: (item: Product) => void;
	activateDiscount: (value: number) => void;
	cartItemsPrice: number;
}
// default values of context
export const ShoppingCartContext = createContext<ShoppingCartContextProps | undefined>(undefined);

const ShoppingCartContextProvider = ({ children }: Props) => {
	const [isCartOpened, setIsCartOpened] = useState<boolean>(false);
	const [cartItems, setCartItems] = useState<CartItem[]>([]);
	const [cartItemsPrice, setCartItemsPrice] = useState(0);
	const [discount, setDiscount] = useState({
		isActivated: false,
		discountAmount: 0,
	});

	// Count of price of items inside the cart, with or without discount
	useEffect(() => {
		const productsPrice = discount.isActivated
			? (
					cartItems.reduce(
						(accu: any, curr: any) => accu + curr.price * curr.quantity,
						0
					) * discount.discountAmount
			  ).toFixed()
			: cartItems.reduce((accu, curr) => accu + curr.price * curr.quantity, 0);
		setCartItemsPrice(+productsPrice);
	}, [cartItems, discount]);

	// Toggler for Quick Cart View
	const openDropDown = () => {
		setIsCartOpened((prevState) => !prevState);
	};

	// Sets Discount
	const activateDiscount = (value: number) => {
		setDiscount((prevState) => ({
			...prevState,
			isActivated: !prevState.isActivated,
			discountAmount: value,
		}));
	};

	const addToCart = (productToAdd: Product) => {
		const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
		// If Product is already existing in the shopping cart
		if (existingCartItem) {
			setCartItems((prevCartItems) =>
				prevCartItems.map((cartItem) =>
					cartItem.id === productToAdd.id
						? { ...cartItem, quantity: cartItem.quantity + 1 }
						: cartItem
				)
			);
			// If Product is not in the cart, adds it in
		} else {
			setCartItems((prevCartItems) => [...prevCartItems, { ...productToAdd, quantity: 1 }]);
		}
	};

	const decreaseCartItemQty = (cartItemQtyToDecrease: Product) => {
		const existingCartItem = cartItems.find(
			(cartItem) => cartItem.id === cartItemQtyToDecrease.id
		);
		// If Product is already existing in the shopping cart
		if (existingCartItem && existingCartItem.quantity > 1) {
			setCartItems((prevCartItems) =>
				prevCartItems.map((cartItem) =>
					cartItem.id === cartItemQtyToDecrease.id
						? { ...cartItem, quantity: cartItem.quantity - 1 }
						: cartItem
				)
			);
		}
		if (existingCartItem?.quantity === 1) {
			setCartItems((prevCartItems) =>
				prevCartItems.filter((cartItem) => cartItem.id !== cartItemQtyToDecrease.id)
			);
		}
	};

	const removeFromCart = (cartItemToRemove: Product) => {
		const newCartArr = cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
		setCartItems(newCartArr);
	};

	const contextValue = {
		isCartOpened,
		openDropDown,
		cartItems,
		addToCart,
		removeFromCart,
		decreaseCartItemQty,
		discount,
		activateDiscount,
		cartItemsPrice,
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
