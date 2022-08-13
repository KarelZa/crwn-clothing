import React from 'react';
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';
import { ShoppingCartContext, useCartContext } from '../../contexts/cart.context';
import { StyledCartIcon } from '../../styles/cart-icon/CartIcon.styled';
import { usePopupState, bindHover, bindPopper } from 'material-ui-popup-state/hooks';
import Popper from '@mui/material/Popper';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { useNavigate } from 'react-router-dom';
interface cartIconProps {}

const CartIcon = (props: cartIconProps) => {
	const { cartItems } = useCartContext();
	const countOfItems = cartItems.reduce((accu, curr) => accu + curr.quantity, 0);
	const popupState = usePopupState({
		variant: 'popper',
		popupId: countOfItems > 0 ? 'cartPopper' : null,
		disableAutoFocus: true,
	});
	// TouchDevice Simple Detection
	function isTouchDevice() {
		return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
	}
	const myFlag = isTouchDevice();

	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate('/checkout', { replace: true });
	};

	return (
		<>
			<StyledCartIcon {...bindHover(popupState)} onClick={goToCheckoutHandler}>
				<ShoppingCartIcon aria-haspopup={true} />
				<span>{countOfItems}</span>
			</StyledCartIcon>
			{!myFlag && countOfItems > 0 && (
				<Popper
					{...bindPopper(popupState)}
					placement='bottom-end'
					keepMounted={true}
					disablePortal={true}
					sx={{ zIndex: '20' }}
				>
					<CartDropdown />
				</Popper>
			)}
		</>
	);
};

export default CartIcon;
