import React from 'react';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { useCartContext } from '../../contexts/cart.context';
import { StyledCheckout } from '../../styles/checkout/Checkout.styled';

type CheckoutProps = {};

const Checkout = (props: CheckoutProps) => {
	const { cartItems } = useCartContext();
	const totalPrice = cartItems.reduce((accu, curr) => accu + curr.price * curr.quantity, 0);
	return (
		<StyledCheckout>
			{cartItems.map((item) => {
				return <CheckoutItem key={item.id} checkoutItem={item} />;
			})}

			{cartItems.length > 0 && <span>{totalPrice}</span>}
		</StyledCheckout>
	);
};

export default Checkout;
