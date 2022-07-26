import { styled } from '@mui/material/styles';

interface StyledCheckoutProps {}
interface StyledCheckoutItemProps {}

export const StyledCheckout = styled('div')<StyledCheckoutProps>(({ theme }) => ({}));

export const StyledCheckoutItem = styled('div')<StyledCheckoutItemProps>(({ theme }) => ({
	width: '100%',
	height: 'auto',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	background: '#F3F7F6',
	boxShadow: '0px 5px 20px -2px rgba(31,31,31,.9)',
	margin: '0 0 1rem 0',

	'& .cart-item-main': {
		padding: '1rem',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		gap: '1rem',

		'& .cart-item-image ': {
			width: '40%',
			// background: 'red',
			display: 'flex',
			img: {
				maxWidth: '100%',
				maxHeight: '250px',
				margin: '0 auto',
			},
		},
		'& .cart-item-desc': {
			// background: 'green',
			width: '60%',
			display: 'flex',
			flexDirection: 'column',

			'& .header': {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			},
			'& .price': {
				color: '#A24936',
			},
		},
	},

	'.quantity': {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '0 16%',
		height: '2.6rem',
		background: '#1F1F1F',
		color: '#EFF1E4',

		'& .quantity-controls': {
			display: 'flex',
			alignItems: 'center',
			'& span': {
				width: '50px',
				textAlign: 'center',
			},
			'& svg': {
				'& path': {
					color: '#EFF1E4',
				},
			},
		},
	},
}));
