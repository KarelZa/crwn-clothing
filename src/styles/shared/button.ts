import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface StyledButtonProps {
	bgColor?: string;
	borderColor?: string;
	textColor?: string;
	bgHover?: string;
}

export const StyledButton = styled(Button, {
	shouldForwardProp: (prop) =>
		prop !== 'bgColor' && prop !== 'borderColor' && prop !== 'textColor' && prop !== 'bgHover',
})<StyledButtonProps>(({ theme, ...otherProps }) => ({
	width: '50%',
	padding: '1rem 0',
	backgroundColor: otherProps.bgColor || 'inherit',
	color: otherProps.textColor || 'inherit',
	'&:hover': {
		backgroundColor: otherProps.bgHover || 'inherit',
	},
}));
