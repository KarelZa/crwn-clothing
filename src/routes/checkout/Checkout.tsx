import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import CartItem from '../../model/cartItem.model';
import { useDispatch } from 'react-redux';
import { activateDiscount } from '../../store/cart/cart.action';
import { Route, Routes } from 'react-router-dom';
import CheckoutPreview from '../checkout-preview/CheckoutPreview';
import ContactPayment from '../contact-payment/ContactPayment';
import Order from '../order/Order';

const Checkout = () => {
	const dispatch = useDispatch();
	const cartItems: CartItem[] = useSelector(selectCartItems);

	let navigate = useNavigate();
	const routeChangeHandler = () => {
		let path = `/shop`;
		navigate(path);
	};

	useEffect(() => {
		return () => {
			if (cartItems.length === 0) {
				dispatch(activateDiscount(false, 0));
			}
		};
	}, [cartItems.length, dispatch]);

	return (
		<Routes>
			<Route index element={<CheckoutPreview />} />
			<Route path=':contact-payment' element={<ContactPayment />} />
			<Route path='failed-order' element={<Order />} />
			<Route path='successful-order' element={<Order />} />
		</Routes>
	);
};

export default Checkout;
