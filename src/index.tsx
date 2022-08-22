import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './contexts/user.context';
import { ThemeProvider } from '@mui/system';
import { theme } from './styles/appTheme/theme';
import { CategoriesContextProvider } from './contexts/categories.context';
import { Provider } from 'react-redux';
import { responsiveFontSizes } from '@mui/material';
import { ShoppingCartContextProvider } from './contexts/cart.context';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ThemeProvider theme={responsiveFontSizes(theme)}>
					<UserContextProvider>
						<CategoriesContextProvider>
							<ShoppingCartContextProvider>
								<App />
							</ShoppingCartContextProvider>
						</CategoriesContextProvider>
					</UserContextProvider>
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
