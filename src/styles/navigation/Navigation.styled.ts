import { styled } from '@mui/material/styles';

interface StyledNavigationProps {}

export const StyledNavigation = styled('div')<StyledNavigationProps>(
	({ theme, ...otherProps }) => ({
		position: 'relative',
		height: '120px',
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',

		'& .logo': {
			height: 'auto',
			width: '70px',
			marginLeft: '5px',
		},

		'& .nav-links': {
			position: 'relative',
			height: '100%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
			gap: '1.5rem',
			'& .MuiTypography-h6 ': {
				textTransform: 'uppercase',
				fontWeight: '600',
				cursor: 'pointer',
			},
		},

		[theme.breakpoints.up('sm')]: {},
		[theme.breakpoints.up('md')]: {},
		[theme.breakpoints.up('lg')]: {},
	})
);
