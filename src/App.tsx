import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';

const Shop = () => {
	return <div>Hello I am SHOP PAGE</div>;
};

function App() {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='/shop' element={<Shop />} />
			</Route>
		</Routes>
	);
}

export default App;
