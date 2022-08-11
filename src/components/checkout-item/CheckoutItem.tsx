import React from 'react';
import { useCartContext } from '../../contexts/cart.context';
import CartItem from '../../model/cartItem.model';
import Typography from '@mui/material/Typography';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { CgTrashEmpty } from 'react-icons/cg';
import { StyledCheckoutItem } from '../../styles/checkout-item/CheckoutItem.styled';

type CheckoutItemProps = {
	checkoutItem: CartItem;
};

const CheckoutItem = ({ checkoutItem }: CheckoutItemProps) => {
	const { imageUrl, name, price, quantity } = checkoutItem;
	const { addToCart, removeFromCart, decreaseCartItemQty } = useCartContext();

	const decreaseItemQtyHandler = () => decreaseCartItemQty(checkoutItem);
	const increaseItemQtyHandler = () => addToCart(checkoutItem);
	const removeItemHandler = () => removeFromCart(checkoutItem);

	return (
		<StyledCheckoutItem>
			<div className='cart-item-main'>
				<div className='cart-item-image'>
					<img src={imageUrl} alt={name} />
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
							<Typography component={'span'} variant='h5' fontWeight={800}>
								{price} CZK
							</Typography>
							<div className='quantity-controls'>
								<AiOutlineMinusCircle
									onClick={decreaseItemQtyHandler}
									size={20}
									color={'#14110F'}
								/>
								<Typography component={'span'} variant='h5' fontWeight={500}>
									{quantity}
								</Typography>
								<AiOutlinePlusCircle
									onClick={increaseItemQtyHandler}
									size={20}
									color={'#14110F'}
								/>
							</div>
						</div>
						<div className='actions'>
							<div className='favourite'>
								<MdOutlineFavoriteBorder />
								<Typography component={'span'} variant='subtitle2'>
									FAVOURITE
								</Typography>
							</div>
							<div className='remove' onClick={removeItemHandler}>
								<CgTrashEmpty />
								<Typography component={'span'} variant='subtitle2'>
									REMOVE
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
