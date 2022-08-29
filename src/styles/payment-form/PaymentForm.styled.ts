import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface StyledPaymentFormProps {
	bgColor?: string;
	borderColor?: string;
	textColor?: string;
	bgHover?: string;
}

export const StyledPaymentForm = styled('div')<StyledPaymentFormProps>(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	justifyContent: 'space-around',
	alignItems: 'center',
	height: '200px',
	background: 'red',

	'& .StripeElement': {
		height: '40px',
		background: 'white',
		width: '100%',
	},
}));
