import { styled } from '@mui/material/styles';

interface StyledSignUpFormProps {
	flexDir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

export const StyledSignUpForm = styled('form', {
	shouldForwardProp: (prop) => prop !== 'flexDir',
})<StyledSignUpFormProps>(({ theme, flexDir }) => ({
	display: 'flex',
	flexDirection: flexDir || 'row',
	rowGap: '1rem',
	margin: '2rem 0 0 0',
}));
