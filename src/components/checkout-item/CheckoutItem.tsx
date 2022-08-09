import React from 'react';
import { useCartContext } from '../../contexts/cart.context';
import CartItem from '../../model/cartItem.model';
import { StyledCheckoutItem } from '../../styles/checkout/Checkout.styled';
import Typography from '@mui/material/Typography';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { CgTrashEmpty } from 'react-icons/cg';

type CheckoutItemProps = {
	checkoutItem: CartItem;
};

const CheckoutItem = ({ checkoutItem }: CheckoutItemProps) => {
	const { imageUrl, name, price, quantity } = checkoutItem;
	const { addToCart, removeFromCart, decreaseCartItemQty } = useCartContext();
	return (
		<StyledCheckoutItem>
			<div className='cart-item-main'>
				<div className='cart-item-image'>
					<img src={imageUrl} />
				</div>
				<div className='cart-item-desc'>
					<div className='header'>
						<Typography
							component={'span'}
							variant='body1'
							className='item-name'
							fontWeight={600}
						>
							{name}
						</Typography>
					</div>
					<div className='general-info'>
						<div className='price'>
							<Typography component={'span'} variant='h6' fontWeight={800}>
								{price} CZK
							</Typography>
							<div className='quantity-controls'>
								<AiOutlineMinusCircle
									onClick={() => decreaseCartItemQty(checkoutItem)}
									size={20}
									color={'#14110F'}
								/>
								<Typography component={'span'} variant='h6' fontWeight={500}>
									{quantity}
								</Typography>
								<AiOutlinePlusCircle
									onClick={() => addToCart(checkoutItem)}
									size={20}
									color={'#14110F'}
								/>
							</div>
						</div>
						<div className='actions'>
							<div className='favourite'>
								<MdOutlineFavoriteBorder />
								<Typography component={'span'} variant='subtitle1'>
									FAVOURITE
								</Typography>
							</div>
							<div className='delete' onClick={() => removeFromCart(checkoutItem)}>
								<CgTrashEmpty />
								<Typography component={'span'} variant='subtitle1'>
									DELETE
								</Typography>
							</div>
						</div>
					</div>
				</div>
			</div>
		</StyledCheckoutItem>
	);
};

export default CheckoutItem;
