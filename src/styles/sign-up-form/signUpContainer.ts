import { styled } from '@mui/material/styles';

interface StyledContainerProps {
	flexDir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

export const StyledContainer = styled('div', {
	shouldForwardProp: (prop) => prop !== 'flexDir',
})<StyledContainerProps>(({ theme, flexDir }) => ({
	display: 'flex',
	flexDirection: flexDir || 'row',
	justifyContent: 'center',
	width: '100%',

	h2: {
		margin: '1rem 0',
	},

	[theme.breakpoints.up('sm')]: {},

	[theme.breakpoints.up('md')]: {},
	[theme.breakpoints.up('lg')]: {},
}));
