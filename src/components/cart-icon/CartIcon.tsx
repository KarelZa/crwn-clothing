import React from 'react';
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';
import { useCartContext } from '../../contexts/cart.context';
import { StyledCartIcon } from '../../styles/cart-icon/CartIcon.styled';
import { usePopupState, bindHover, bindPopper } from 'material-ui-popup-state/hooks';
import Popper from '@mui/material/Popper';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { useLocation, useNavigate } from 'react-router-dom';
import Fade from '@mui/material/Fade';
import { Backdrop, Paper } from '@mui/material';
interface cartIconProps {}

const CartIcon = (props: cartIconProps) => {
	const { cartItems } = useCartContext();
	const countOfItems = cartItems.reduce((accu, curr) => accu + curr.quantity, 0);
	const navigate = useNavigate();
	const location = useLocation();
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
	const goToCheckoutHandler = () => {
		navigate('/checkout', { replace: true });
	};

	return (
		<>
			<StyledCartIcon {...bindHover(popupState)} onClick={goToCheckoutHandler}>
				<ShoppingCartIcon />
				<span>{countOfItems}</span>
			</StyledCartIcon>

			{!myFlag && countOfItems > 0 && location.pathname !== '/checkout' && (
				<>
					<Popper
						{...bindPopper(popupState)}
						placement='bottom-end'
						keepMounted={true}
						disablePortal={true}
						sx={{ zIndex: '20' }}
						transition
					>
						{({ TransitionProps }) => (
							<Fade {...TransitionProps} timeout={250}>
								<Paper>
									<CartDropdown />
								</Paper>
							</Fade>
						)}
					</Popper>
					<Backdrop
						sx={{ color: '#fff', zIndex: 5 }}
						open={popupState.isOpen}
						// invisible={popupState.isOpen === true ? false : true}
						// onClick={() => popupState.setOpen(false)}
					/>
				</>
			)}
		</>
	);
};

export default CartIcon;
