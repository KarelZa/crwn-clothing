import React from 'react';
import Typography from '@mui/material/Typography';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { useCartContext } from '../../contexts/cart.context';
import { StyledCheckout } from '../../styles/checkout/Checkout.styled';
import CheckoutSidebar from '../../components/checkout-sidebar/CheckoutSidebar';

type CheckoutProps = {};

const Checkout = () => {
	const { cartItems, activateDiscount, discount } = useCartContext();
	const productsPrice = discount.isActivated
		? (
				cartItems.reduce((accu, curr) => accu + curr.price * curr.quantity, 0) *
				discount.discountAmount
		  ).toFixed()
		: cartItems.reduce((accu, curr) => accu + curr.price * curr.quantity, 0);

	return (
		<>
			<Typography component={'h4'} variant='h4' fontWeight={600} sx={{ mb: 3 }}>
				MY BASKET
			</Typography>
			<StyledCheckout>
				<div className='checkout-items'>
					{cartItems.map((item) => {
						return <CheckoutItem key={item.id} checkoutItem={item} />;
					})}
				</div>
				<CheckoutSidebar productsPrice={productsPrice} />
			</StyledCheckout>
		</>
	);
};

export default Checkout;
