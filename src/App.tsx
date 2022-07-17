import { ThemeProvider } from '@mui/system';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Authentication from './routes/authentication/Authentication';
import { theme } from './styles/appTheme/theme';

const Shop = () => {
	return <div>Hello I am SHOP PAGE</div>;
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='/shop' element={<Shop />} />
					<Route path='/auth' element={<Authentication />} />
				</Route>
			</Routes>
		</ThemeProvider>
	);
}

export default App;
