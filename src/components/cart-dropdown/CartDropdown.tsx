import React from 'react';
import { StyledCartDropdown } from '../../styles/cart-dropdown/CartDropdown.styled';
import { StyledButton } from '../../styles/shared/button';

type CartDropdownProps = {};

const CartDropdown = (props: CartDropdownProps) => {
	return (
		<StyledCartDropdown>
			<div className='cart-items' />
			<StyledButton variant='contained' size='small' bgColor='#14110F'>
				CHECKOUT
			</StyledButton>
		</StyledCartDropdown>
	);
};

export default CartDropdown;
