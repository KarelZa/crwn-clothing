import { styled } from '@mui/material/styles';

interface StyledGridContainerProps {
	gridTemplateCol?: string;
	colGap?: string;
	rowGap?: string;
}

export const StyledGridContainer = styled('div', {
	shouldForwardProp: (prop) =>
		prop !== 'gridTemplateCol' && prop !== 'colGap' && prop !== 'rowGap',
})<StyledGridContainerProps>(({ theme, ...otherProps }) => ({
	display: 'grid',
	gridTemplateColumns: otherProps.gridTemplateCol || '1',
	rowGap: otherProps.rowGap || '0',
	columnGap: otherProps.colGap || '0',

	[theme.breakpoints.up('sm')]: {},
	[theme.breakpoints.up('md')]: {},
	[theme.breakpoints.up('lg')]: {},
}));
