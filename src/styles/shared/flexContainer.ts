import { styled } from '@mui/material/styles';

interface StyledFlexContainerProps {
	flexDir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
	justifyCon?: string;
	alignIte?: string;
	flexGap?: string;
}

export const StyledFlexContainer = styled('div', {
	shouldForwardProp: (prop) =>
		prop !== 'flexDir' && prop !== 'justifyCon' && prop !== 'alignIte' && prop !== 'flexGap',
})<StyledFlexContainerProps>(({ theme, ...otherProps }) => ({
	display: 'flex',
	flexDirection: otherProps.flexDir || 'row',
	justifyContent: otherProps.justifyCon || 'center',
	alignItems: otherProps.alignIte || 'flex-start',
	gap: otherProps.flexGap || '0',

	[theme.breakpoints.up('sm')]: {},
	[theme.breakpoints.up('md')]: {},
	[theme.breakpoints.up('lg')]: {},
}));
