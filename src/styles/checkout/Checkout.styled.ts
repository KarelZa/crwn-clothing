import { styled } from '@mui/material/styles';

interface StyledCheckoutProps {}

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
