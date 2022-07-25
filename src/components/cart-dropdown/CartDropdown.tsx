import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ShoppingCartContext, useCartContext } from '../../contexts/cart.context';
import { StyledCartDropdown } from '../../styles/cart-dropdown/CartDropdown.styled';
import { StyledButton } from '../../styles/shared/button';
import CartItem from '../cart-item/CartItem';

type CartDropdownProps = {};

const CartDropdown = (props: CartDropdownProps) => {
	const { cartItems } = useCartContext();
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate('/checkout', { replace: true });
	};

	return (
		<StyledCartDropdown>
			<div className='cart-items'>
				{cartItems.map((item) => (
					<CartItem key={item.id} cartItem={item} />
				))}
			</div>
			<StyledButton
				variant='contained'
				size='small'
				bgColor='#14110F'
				onClick={goToCheckoutHandler}
			>
				CHECKOUT
			</StyledButton>
		</StyledCartDropdown>
	);
};

export default CartDropdown;
