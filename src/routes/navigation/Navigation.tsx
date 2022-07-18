import { User } from 'firebase/auth';
import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user';
import { signOutCurrentUser } from '../../utils/firebase/firebase';
import './navigation.styles.scss';

type NavigationProps = {};

const Navigation = (props: NavigationProps) => {
	const { currentUser, setCurrentUser } = useContext(UserContext);

	const signOutHandler = async () => {
		await signOutCurrentUser();
		setCurrentUser(null);
	};

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
						<span className='nav-link' onClick={signOutHandler}>
							Sign Out
						</span>
					) : (
						<Link className='nav-link' to='/auth'>
							Sign In
						</Link>
					)}
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
