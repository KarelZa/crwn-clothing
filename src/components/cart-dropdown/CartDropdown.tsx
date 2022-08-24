import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../contexts/cart.context';
import ICartItem from '../../model/cartItem.model';
import { selectCartItems } from '../../store/cart/cart.selector';
import { StyledCartDropdown } from '../../styles/cart-dropdown/CartDropdown.styled';
import { StyledButton } from '../../styles/shared/button';
import CartItem from '../cart-item/CartItem';
import DeliveryWidget from '../delivery-widget/DeliveryWidget';

type CartDropdownProps = {};

const CartDropdown = (props: CartDropdownProps) => {
	const { cartItemsPrice } = useContext(ShoppingCartContext);
	const cartItems: ICartItem[] = useSelector(selectCartItems);
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
