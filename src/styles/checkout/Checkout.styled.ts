import { styled } from '@mui/material/styles';

interface StyledCheckoutProps {}
interface StyledCheckoutItemProps {}

export const StyledCheckout = styled('div')<StyledCheckoutProps>(({ theme }) => ({}));

export const StyledCheckoutItem = styled('div')<StyledCheckoutItemProps>(({ theme }) => ({
	width: '100%',
	height: 'auto',
	// background: 'yellow',
	display: 'flex',
	alignItems: 'center',
	border: '1px solid black',
	margin: '0 0 1rem 0',
	gap: '1rem',

	'& .cart-item-image ': {
		width: '40%',
		height: 'auto',
		// background: 'red',
		display: 'flex',
		marginLeft: '1rem',
		img: {
			width: '100%',
			height: 'auto',
		},
	},
	'& .cart-item-desc': {
		// background: 'green',
		width: '60%',
		padding: '1rem 1rem',
		display: 'flex',
		flexDirection: 'column',
		gap: '.5rem',
		'& .item-name': {
			textAlign: 'center',
		},
		'& .quantity': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-evenly',
			'& .quantity-controls': {
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-evenly',
			},
		},
		'& .price': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-evenly',
		},
		'& .actions': {
			marginTop: '1rem',
			display: 'flex',
			justifyContent: 'space-around',
		},
	},
}));
