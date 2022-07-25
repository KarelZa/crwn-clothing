import React, { useContext } from 'react';
import { ShoppingCartContext, useCartContext } from '../../contexts/cart.context';
import { StyledCartDropdown } from '../../styles/cart-dropdown/CartDropdown.styled';
import { StyledButton } from '../../styles/shared/button';
import CartItem from '../cart-item/CartItem';

type CartDropdownProps = {};

const CartDropdown = (props: CartDropdownProps) => {
	const { cartItems } = useCartContext();
	return (
		<StyledCartDropdown>
			<div className='cart-items'>
				{cartItems.map((item) => (
					<CartItem key={item.id} cartItem={item} />
				))}
			</div>
			<StyledButton variant='contained' size='small' bgColor='#14110F'>
				CHECKOUT
			</StyledButton>
		</StyledCartDropdown>
	);
};

export default CartDropdown;
