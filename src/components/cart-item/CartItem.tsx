import React from 'react';
import Typography from '@mui/material/Typography';
import ICartItem from '../../model/cartItem.model';
import { StyledCartItem } from '../../styles/cart-item/CartItem.styled';

interface CartItemProps {
	cartItem: ICartItem;
}

const CartItem = ({ cartItem }: CartItemProps) => {
	const { name, price, quantity, imageUrl } = cartItem;
	return (
		<StyledCartItem>
			<div className='cart-item-img'>
				<img src={imageUrl} alt={name} />
			</div>
			<div className='cart-item-details'>
				<Typography component={'span'} variant='body1'>
					{quantity} x <strong>{name}</strong>
				</Typography>

				<Typography component={'span'} variant='body1' fontWeight={500}>
					{price} CZK
				</Typography>
			</div>
			<span>&#10006;</span>
		</StyledCartItem>
	);
};

export default CartItem;
