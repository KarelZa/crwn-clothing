import React, { useContext } from 'react';
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';
import { ShoppingCartContext } from '../../contexts/cart.context';
import { StyledCartIcon } from '../../styles/cartIcon/CartIcon.styled';

type cartIconProps = {};

const CartIcon = (props: cartIconProps) => {
	const { OpenDropDown } = useContext(ShoppingCartContext);
	return (
		<StyledCartIcon onClick={() => OpenDropDown()}>
			<ShoppingCartIcon />
			<span>0</span>
		</StyledCartIcon>
	);
};

export default CartIcon;
