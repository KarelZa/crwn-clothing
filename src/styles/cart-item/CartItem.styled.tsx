import { styled } from '@mui/material/styles';

interface StyledCartItemProps {}

export const StyledCartItem = styled('div')<StyledCartItemProps>(({ theme }) => ({
	width: '100%',
	display: 'flex',
	height: '80px',
	margin: '0 0 15px 0',
	justifyContent: 'space-around',
	img: {
		width: '30%',
	},

	'.cart-item-details': {
		width: '70%',
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
}));
