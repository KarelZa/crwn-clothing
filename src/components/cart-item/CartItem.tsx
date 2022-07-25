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
			<img src={imageUrl} alt={name} />
			<div className='cart-item-details'>
				<Typography component={'span'} variant='body2'>
					{name}
				</Typography>
				<Typography component={'span'} variant='subtitle2' fontWeight={700}>
					{quantity} x {price} CZK
				</Typography>
			</div>
		</StyledCartItem>
	);
};

export default CartItem;
