import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';
import CartIcon from '../../components/cart-icon/CartIcon';
import { useCartContext } from '../../contexts/cart.context';
import { useUserContext } from '../../contexts/user.context';
import useHover from '../../hooks/useHover';
import { signOutCurrentUser } from '../../utils/firebase/firebase';

import './navigation.styles.scss';

type NavigationProps = {};

const Navigation = (props: NavigationProps) => {
	const { currentUser } = useUserContext();

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
					<Link className='nav-link' to='/checkout'>
						<CartIcon />
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
