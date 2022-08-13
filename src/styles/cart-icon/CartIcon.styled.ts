import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface StyledCartIconProps {}

export const StyledCartIcon = styled('div')<StyledCartIconProps>(({ theme }) => ({
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	cursor: 'pointer',
	marginLeft: '10px',
	// marginRight: '10px',
	zIndex: 30,
	// padding: '1rem',
	svg: {
		width: '33px',
		height: '33px',
	},
	span: {
		position: 'absolute',
		fontSize: '16px',
		fontWeight: 'bold',
		bottom: '1px',
	},
}));
