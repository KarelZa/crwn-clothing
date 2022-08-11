import { styled } from '@mui/material/styles';

interface StyledCheckoutProps {}
interface StyledEmptyCheckoutProps {}

export const StyledCheckout = styled('div')<StyledCheckoutProps>(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',

	[theme.breakpoints.up('sm')]: {},
	[theme.breakpoints.up('md')]: {
		display: 'grid',
		gridTemplateColumns: '2fr 1fr',
		gridTemplateRows: 'auto',
		gap: '1rem',
	},
	[theme.breakpoints.up('lg')]: {},
}));

export const StyledEmptyCheckout = styled('div')<StyledEmptyCheckoutProps>(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	button: {
		width: '150px',
	},
	[theme.breakpoints.up('sm')]: {},
	[theme.breakpoints.up('md')]: {},
	[theme.breakpoints.up('lg')]: {},
}));
