import { styled } from '@mui/material/styles';

interface StyledFormProps {
	flexDir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

export const StyledForm = styled('form', {
	shouldForwardProp: (prop) => prop !== 'flexDir',
})<StyledFormProps>(({ theme, flexDir }) => ({
	display: 'flex',
	flexDirection: flexDir || 'row',
	rowGap: '1rem',
	margin: '2rem 0 0 0',
}));
