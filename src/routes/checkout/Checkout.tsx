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
import SuccessfulOrder from '../order/SuccessfulOrder';

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
			<Route path='successful-order' element={<SuccessfulOrder />} />
			{/* <Route path='failed-order' element={<SuccessfulOrder />} /> */}
		</Routes>
	);

	// return (
	// 	<>
	// 		{cartItems.length !== 0 ? (
	// 			<>
	// 				<Typography component={'h4'} variant='h4' fontWeight={600} sx={{ mb: 3 }}>
	// 					MY CART
	// 				</Typography>
	// 				<StyledCheckout>
	// 					<div className='checkout-items'>
	// 						{cartItems.map((item) => {
	// 							return <CheckoutItem key={item.id} checkoutItem={item} />;
	// 						})}
	// 					</div>
	// 					<CheckoutSidebar />
	// 				</StyledCheckout>
	// 			</>
	// 		) : (
	// 			<StyledEmptyCheckout>
	// 				<Typography variant='h4' gutterBottom pt={5} mb={5} component='h3'>
	// 					Your cart is empty
	// 				</Typography>
	// 				<StyledButton
	// 					variant='contained'
	// 					bgColor='black'
	// 					textColor='white'
	// 					bgHover='black'
	// 					onClick={routeChangeHandler}
	// 				>
	// 					<Typography variant='h5'>FILL IT</Typography>
	// 				</StyledButton>
	// 			</StyledEmptyCheckout>
	// 		)}
	// 	</>
	// );
};

export default Checkout;
