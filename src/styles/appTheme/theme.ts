import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	typography: {
		fontFamily: 'Montserrat',
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 576,
			md: 813,
			lg: 1200,
			xl: 1536,
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				outlined: {
					color: 'black',
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'& label': {
						color: '#303636',
					},
					'& label.Mui-focused': {
						color: '#303636',
					},
					'& .MuiInput-underline:after': {
						borderBottomColor: '#303636',
					},
					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							borderColor: '#9EA7A9',
						},
						'&:hover fieldset': {
							borderColor: '#303636',
						},
						'&.Mui-focused fieldset': {
							borderColor: '#303636',
						},
					},
				},
			},
		},
	},
});
