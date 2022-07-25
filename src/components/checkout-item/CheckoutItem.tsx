import Typography from '@mui/material/Typography';
import React from 'react';
import { useCartContext } from '../../contexts/cart.context';
import CartItem from '../../model/cartItem.model';
import { StyledCheckoutItem } from '../../styles/checkout/Checkout.styled';

type CheckoutItemProps = {
	checkoutItem: CartItem;
};

const CheckoutItem = ({ checkoutItem }: CheckoutItemProps) => {
	const { imageUrl, name, price, quantity } = checkoutItem;
	const { addToCart, removeFromCart, decreaseCartItemQty } = useCartContext();
	return (
		<StyledCheckoutItem>
			<div className='cart-item-image'>
				<img src={imageUrl} />
			</div>
			<div className='cart-item-desc'>
				<Typography component={'span'} variant='h6' className='item-name'>
					{name}
				</Typography>

				<div className='quantity'>
					<Typography component={'span'} variant='subtitle1'>
						Quantity:
					</Typography>
					<div className='quantity-controls'>
						<span onClick={() => decreaseCartItemQty(checkoutItem)}>&lt;</span>
						<Typography component={'span'} variant='subtitle1'>
							{quantity}
						</Typography>
						<span onClick={() => addToCart(checkoutItem)}>&gt;</span>
					</div>
				</div>
				<div className='price'>
					<Typography component={'span'} variant='subtitle1'>
						Price:
					</Typography>
					<Typography component={'span'} variant='subtitle1'>
						{price} CZK
					</Typography>
				</div>
				<div className='actions'>
					<Typography
						component={'span'}
						variant='subtitle2'
						onClick={() => removeFromCart(checkoutItem)}
					>
						remove
					</Typography>
					<Typography component={'span'} variant='subtitle2'>
						favourites
					</Typography>
				</div>
			</div>
		</StyledCheckoutItem>
	);
};

export default CheckoutItem;
