import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Authentication from './routes/authentication/Authentication';
import { UserContext } from './contexts/user.context';
import Shop from './routes/shop/Shop';
import { Container } from '@mui/material';

function App() {
	return (
		<Container maxWidth='lg'>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='/shop' element={<Shop />} />
					<Route path='/auth' element={<Authentication />} />
				</Route>
			</Routes>
		</Container>
	);
}

export default App;
