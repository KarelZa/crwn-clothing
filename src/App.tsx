import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Authentication from './routes/authentication/Authentication';
import { UserContext } from './contexts/user';

const Shop = () => {
	const { currentUser } = useContext(UserContext);
	return <div>Hello I am SHOP PAGE , I am {currentUser?.email}</div>;
};

function App() {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/auth' element={<Authentication />} />
			</Route>
		</Routes>
	);
}

export default App;
