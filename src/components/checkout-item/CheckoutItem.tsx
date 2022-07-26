import React from 'react';
import { useCartContext } from '../../contexts/cart.context';
import CartItem from '../../model/cartItem.model';
import { StyledCheckoutItem } from '../../styles/checkout/Checkout.styled';
import Typography from '@mui/material/Typography';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { CgTrashEmpty } from 'react-icons/cg';
import IconButton from '@mui/material/IconButton';

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
						<IconButton sx={{ '&:hover': { background: '#C2FBEF' } }}>
							<CgTrashEmpty
								onClick={() => removeFromCart(checkoutItem)}
								size={23}
								color='#14110F'
							/>
						</IconButton>
					</div>
					<div className='price'>
						<Typography component={'span'} variant='subtitle2'>
							{price} CZK
						</Typography>
					</div>
					{/* <div className='actions'>
						<Typography component={'span'} variant='subtitle2'>
							favourites
						</Typography>
					</div> */}
				</div>
			</div>
			<div className='quantity'>
				<Typography component={'span'} variant='subtitle1'>
					Quantity:
				</Typography>
				<div className='quantity-controls'>
					<AiOutlineMinusCircle
						onClick={() => decreaseCartItemQty(checkoutItem)}
						size={20}
						color={'#14110F'}
					/>
					<Typography component={'span'} variant='h6' fontWeight={700}>
						{quantity}
					</Typography>
					<AiOutlinePlusCircle
						onClick={() => addToCart(checkoutItem)}
						size={20}
						color={'#14110F'}
					/>
				</div>
			</div>
		</StyledCheckoutItem>
	);
};

export default CheckoutItem;
