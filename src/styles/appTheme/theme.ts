import { createTheme } from '@mui/material/styles';

const breakpoints = {
	values: {
		xs: 0,
		sm: 576,
		md: 813,
		lg: 1200,
		xl: 1536,
	},
};

export const theme = createTheme({
	breakpoints,
	typography: {
		fontFamily: 'Montserrat',
		subtitle1: {
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: 13,
			},
			[`@media screen and (min-width: ${breakpoints.values.lg}px)`]: {
				fontSize: 17,
			},
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
