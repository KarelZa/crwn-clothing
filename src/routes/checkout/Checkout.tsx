import React from 'react';
import Typography from '@mui/material/Typography';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { useCartContext } from '../../contexts/cart.context';
import { StyledCheckout } from '../../styles/checkout/Checkout.styled';
import CheckoutSidebar from '../../components/checkout-sidebar/CheckoutSidebar';

const Checkout = () => {
	const { cartItems } = useCartContext();

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
				<CheckoutSidebar />
			</StyledCheckout>
		</>
	);
};

export default Checkout;
