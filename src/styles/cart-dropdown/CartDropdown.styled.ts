import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface StyledCartDropdownProps {}

export const StyledCartDropdown = styled('div')<StyledCartDropdownProps>(({ theme }) => ({
	// width: '260px',
	// height: '340px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '20px',
	border: '1px solid black',
	backgroundColor: 'white',
	zIndex: '5',
	marginTop: '1rem',

	// .empty-message {
	//   font-size: 18px;
	//   margin: 50px auto;
	// }

	'& .cart-items ': {
		maxHeight: '340px',
		display: 'flex',
		flexDirection: 'column',
		overflowY: 'auto',
		scrollbarWidth: 'none', // firefox
		'&::-webkit-scrollbar': {
			display: 'none', // edge,chrome
		},
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
