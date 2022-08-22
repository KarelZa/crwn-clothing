import React from 'react';
import Typography from '@mui/material/Typography';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/CartIcon';
import { StyledNavigation } from '../../styles/navigation/Navigation.styled';
import { signOutCurrentUser } from '../../utils/firebase/firebase';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

type NavigationProps = {};

const Navigation = (props: NavigationProps) => {
	const currentUser = useSelector(selectCurrentUser);
	return (
		<>
			<StyledNavigation>
				<Link className='logo' to='/'>
					<CrwnLogo className='logo' />
				</Link>
				<div className='nav-links'>
					<Typography variant='h6' component={'span'}>
						<Link to='/shop'>Shop</Link>
					</Typography>
					{currentUser ? (
						<Typography variant='h6' onClick={signOutCurrentUser} component={'span'}>
							Sign Out
						</Typography>
					) : (
						<Typography variant='h6' component={'span'}>
							<Link to='/auth'>Sign In</Link>
						</Typography>
					)}
					<CartIcon />
				</div>
			</StyledNavigation>
			<Outlet />
		</>
	);
};

export default Navigation;
