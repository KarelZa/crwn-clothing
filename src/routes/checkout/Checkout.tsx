import React from 'react';
import Typography from '@mui/material/Typography';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { useCartContext } from '../../contexts/cart.context';
import { StyledCheckout, StyledEmptyCheckout } from '../../styles/checkout/Checkout.styled';
import CheckoutSidebar from '../../components/checkout-sidebar/CheckoutSidebar';
import { StyledButton } from '../../styles/shared/button';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
	const { cartItems } = useCartContext();
	let navigate = useNavigate();
	const routeChangeHandler = () => {
		let path = `/shop`;
		navigate(path);
	};

	return (
		<>
			{cartItems.length !== 0 ? (
				<>
					<Typography component={'h4'} variant='h4' fontWeight={600} sx={{ mb: 3 }}>
						MY CART
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
			) : (
				<StyledEmptyCheckout>
					<Typography variant='h4' gutterBottom pt={5} mb={5} component='h3'>
						Your cart is empty
					</Typography>
					<StyledButton
						variant='contained'
						bgColor='black'
						textColor='white'
						bgHover='black'
						onClick={routeChangeHandler}
					>
						<Typography variant='h5'>FILL IT</Typography>
					</StyledButton>
				</StyledEmptyCheckout>
			)}
		</>
	);
};

export default Checkout;
