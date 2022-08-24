import React from 'react';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ICartItem from '../../model/cartItem.model';
import { selectCartItems, selectCartItemsPrice } from '../../store/cart/cart.selector';
import { StyledCartDropdown } from '../../styles/cart-dropdown/CartDropdown.styled';
import { StyledButton } from '../../styles/shared/button';
import CartItem from '../cart-item/CartItem';
import DeliveryWidget from '../delivery-widget/DeliveryWidget';

type CartDropdownProps = {};

const CartDropdown = (props: CartDropdownProps) => {
	const cartItems: ICartItem[] = useSelector(selectCartItems);
	const cartItemsPrice = useSelector(selectCartItemsPrice);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate('/checkout', { replace: true });
	};

	return (
		<StyledCartDropdown countOfItems={cartItems.length}>
			<div className='cart-items'>
				{cartItems.map((item) => (
					<CartItem key={item.id} cartItem={item} />
				))}
			</div>
			<div className='cart-items-price'>
				<Typography component={'span'} variant='body1'>
					Price of products in cart <strong>{cartItemsPrice} CZK</strong>
				</Typography>
			</div>
			<DeliveryWidget />
			<StyledButton
				variant='contained'
				size='small'
				bgColor='#14110F'
				onClick={goToCheckoutHandler}
			>
				CHECKOUT
			</StyledButton>
		</StyledCartDropdown>
	);
};

export default CartDropdown;
