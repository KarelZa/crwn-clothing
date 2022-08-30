import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface StyledPaymentFormProps {
	bgColor?: string;
	borderColor?: string;
	textColor?: string;
	bgHover?: string;
}

export const StyledPaymentForm = styled('form')<StyledPaymentFormProps>(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	gap: '1rem',
	marginTop: '2rem',
}));

export const StyledCardInputWrapper = styled('div')(({ theme }) => ({
	border: '1px solid #d3d7d8',
	/* border: 1px solid #303636; */
	borderRadius: '6px',
	padding: '20px 4px',
	width: '100%',

	[theme.breakpoints.up('sm')]: {},
	[theme.breakpoints.up('md')]: {},
	[theme.breakpoints.up('lg')]: {},
}));
