import { useMediaQuery } from '@mui/material';
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
	// height: '100vh',
	// width: '100%',
	display: 'grid',
	gridTemplateColumns: `repeat(auto-fit, minmax(${
		useMediaQuery(theme.breakpoints.down('sm')) ? '160px' : '215px'
	}, 1fr))`,
	rowGap: otherProps.rowGap || '0',
	columnGap: otherProps.colGap || '0',
	// gridTemplateRows: `repeat(auto, 300px)`,

	[theme.breakpoints.up('sm')]: {},
	[theme.breakpoints.up('md')]: {},
	[theme.breakpoints.up('lg')]: {},
}));
