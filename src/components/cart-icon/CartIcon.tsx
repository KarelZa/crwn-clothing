import Popover from '@mui/material/Popover';
import React, { useContext } from 'react';
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';
import { ShoppingCartContext, useCartContext } from '../../contexts/cart.context';
import { StyledCartIcon } from '../../styles/cart-icon/CartIcon.styled';
import { usePopupState, bindHover, bindPopper } from 'material-ui-popup-state/hooks';
import Popper from '@mui/material/Popper';
import CartDropdown from '../cart-dropdown/CartDropdown';
interface cartIconProps {}

const CartIcon = (props: cartIconProps) => {
	const { cartItems } = useCartContext();
	const countOfItems = cartItems.reduce((accu, curr) => accu + curr.quantity, 0);

	const popupState = usePopupState({ variant: 'popper', popupId: 'cartPopover' });

	// TouchDevice Simple Detection
	function isTouchDevice() {
		return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
	}
	const myFlag = isTouchDevice();

	return (
		<>
			<StyledCartIcon {...bindHover(popupState)}>
				<ShoppingCartIcon />
				<span>{countOfItems}</span>
			</StyledCartIcon>
			{!myFlag && countOfItems > 0 && (
				<Popper {...bindPopper(popupState)} placement='bottom-end'>
					<CartDropdown />
				</Popper>
			)}
		</>
	);
};

export default CartIcon;
