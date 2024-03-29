import React from 'react';
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';
import { StyledCartIcon } from '../../styles/cart-icon/CartIcon.styled';
import { usePopupState, bindHover, bindPopper } from 'material-ui-popup-state/hooks';
import Popper from '@mui/material/Popper';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { useLocation, useNavigate } from 'react-router-dom';
import Fade from '@mui/material/Fade';
import { Backdrop, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectCountOfItems } from '../../store/cart/cart.selector';
interface cartIconProps {}

const CartIcon = (props: cartIconProps) => {
	const cartItemsCount = useSelector(selectCountOfItems);
	const navigate = useNavigate();
	const location = useLocation();
	const popupState = usePopupState({
		variant: 'popper',
		popupId: cartItemsCount > 0 ? 'cartPopper' : null,
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
				<span>{cartItemsCount}</span>
			</StyledCartIcon>

			{!myFlag && cartItemsCount > 0 && location.pathname !== '/checkout' && (
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
					<Backdrop sx={{ color: '#fff', zIndex: 5 }} open={popupState.isOpen} />
				</>
			)}
		</>
	);
};

export default CartIcon;
