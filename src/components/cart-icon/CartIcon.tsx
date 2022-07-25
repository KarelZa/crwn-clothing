import React, { useContext } from 'react';
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';
import { ShoppingCartContext, useCartContext } from '../../contexts/cart.context';
import { StyledCartIcon } from '../../styles/cart-icon/CartIcon.styled';

type cartIconProps = {};

const CartIcon = (props: cartIconProps) => {
	const { openDropDown, cartItems } = useCartContext();

	const countOfItems = cartItems.reduce((accu, curr) => accu + curr.quantity, 0);

	return (
		<StyledCartIcon onClick={() => openDropDown()}>
			<ShoppingCartIcon />
			<span>{countOfItems}</span>
		</StyledCartIcon>
	);
};

export default CartIcon;
