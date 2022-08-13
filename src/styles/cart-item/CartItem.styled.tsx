import { styled } from '@mui/material/styles';

interface StyledCartItemProps {}

export const StyledCartItem = styled('div')<StyledCartItemProps>(({ theme }) => ({
	width: '100%',
	display: 'flex',
	height: '120px',
	margin: '0 0 15px 0',
	justifyContent: 'space-around',
	alignItems: 'center',

	'& .cart-item-img': {
		width: '150px',
		display: 'flex',
		alignItems: 'center',
		img: {
			padding: '.5rem',
			width: '100%',
			borderRadius: '16px',
		},
	},

	'.cart-item-details': {
		width: '80%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'center',
		padding: '10px 20px',
		gap: '.3rem',
		'& span': {
			textTransfrom: 'capitalize',
		},
	},
	'.remove-btn': {
		margin: '0 1rem 0 0rem',
		cursor: 'pointer',
		'&:hover': {
			color: 'red',
			fontWeight: 800,
		},
	},
}));
