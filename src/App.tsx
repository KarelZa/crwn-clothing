import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import SingIn from './routes/sign-in/SingIn';

const Shop = () => {
	return <div>Hello I am SHOP PAGE</div>;
};

function App() {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/sign-in' element={<SingIn />} />
			</Route>
		</Routes>
	);
}

export default App;
