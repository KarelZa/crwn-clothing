import React from 'react';
import Typography from '@mui/material/Typography';
import ICartItem from '../../model/cartItem.model';
import { StyledCartItem } from '../../styles/cart-item/CartItem.styled';
import { useCartContext } from '../../contexts/cart.context';

interface CartItemProps {
	cartItem: ICartItem;
}

const CartItem = ({ cartItem }: CartItemProps) => {
	const { name, price, quantity, imageUrl } = cartItem;
	const { removeFromCart } = useCartContext();

	const removeCartItemHandler = () => removeFromCart(cartItem);

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
			<span onClick={removeCartItemHandler} className='remove-btn'>
				&#10006;
			</span>
		</StyledCartItem>
	);
};

export default CartItem;
