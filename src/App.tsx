import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Authentication from './routes/authentication/Authentication';
import Shop from './routes/shop/Shop';
import { Container } from '@mui/material';
import Checkout from './routes/checkout/Checkout';
import { createUserDocFromAuth, onAuthStateChangedListener } from './utils/firebase/firebaseInJS';
import { User } from 'firebase/auth';
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user: User) => {
			if (user) {
				createUserDocFromAuth(user);
			}
			dispatch(setCurrentUser(user));
		});

		return unsubscribe;
	}, [dispatch]);

	return (
		<Container maxWidth='lg'>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='/shop/*' element={<Shop />} />
					<Route path='/auth' element={<Authentication />} />
					<Route path='/checkout' element={<Checkout />} />
				</Route>
			</Routes>
		</Container>
	);
}

export default App;
