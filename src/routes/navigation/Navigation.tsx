import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';
import CartIcon from '../../components/cart-icon/CartIcon';
import { ShoppingCartContext } from '../../contexts/cart.context';

import { UserContext } from '../../contexts/user.context';
import { signOutCurrentUser } from '../../utils/firebase/firebase';

import './navigation.styles.scss';

type NavigationProps = {};

const Navigation = (props: NavigationProps) => {
	const { currentUser } = useContext(UserContext);
	const { isOpened } = useContext(ShoppingCartContext);
	return (
		<>
			<div className='navigation'>
				<Link className='logo' to='/'>
					<CrwnLogo className='logo' />
				</Link>
				<div className='nav-links'>
					<Link className='nav-link' to='/shop'>
						Shop
					</Link>
					{currentUser ? (
						<span className='nav-link' onClick={signOutCurrentUser}>
							Sign Out
						</span>
					) : (
						<Link className='nav-link' to='/auth'>
							Sign In
						</Link>
					)}
					<CartIcon />
					{isOpened && <CartDropdown />}
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
