import { styled } from '@mui/material/styles';

interface StyledCartDropdownProps {
	countOfItems: number;
}

export const StyledCartDropdown = styled('div', {
	shouldForwardProp: (prop) => prop !== 'countOfItems',
})<StyledCartDropdownProps>(({ theme, countOfItems }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '20px',
	border: '1px solid #d1d1d1',
	backgroundColor: 'white',
	zIndex: '20',
	marginTop: '1rem',

	'& .cart-items ': {
		maxHeight: '400px',
		display: 'flex',
		flexDirection: 'column',
		overflowY: 'auto',
		scrollbarWidth: countOfItems > 3 ? '' : 'none', // edge,chrome
		'&::-webkit-scrollbar': {
			display: countOfItems > 3 ? '' : 'none', // edge,chrome
		},
	},

	'& .cart-items-price': {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
		padding: '1.5rem 0',
		position: 'relative',
		'&::before, &::after': {
			content: '""',
			background: '#d1d1d1',
			position: 'absolute',
			right: '-20px',
			left: '-20px',
			height: '1px',
		},
		'&::before': {
			top: 0,
		},
		'&::after': {
			bottom: 0,
		},
	},

	'& .delivery': {
		// width: '100%',
		margin: '0rem 0 2rem 0',
	},

	button: {
		marginTop: 'auto',
		width: '100%',
		color: '#F3F3F4',
		'&:hover': {
			background: '#14110F',
		},
	},
}));
