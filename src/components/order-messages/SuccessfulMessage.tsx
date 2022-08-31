import React from 'react';
import Typography from '@mui/material/Typography';
import TransactionCompleted from '../orders-messages-animation/TransactionCompleted';
import { StyledFlexContainer } from '../../styles/shared/flexContainer';

type SuccessfulMessageProps = {
	state?: {
		userName: string;
	};
};

const SuccessfulMessage = ({ state }: SuccessfulMessageProps) => {
	return (
		<StyledFlexContainer
			flexDir='column'
			alignIte='center'
			justifyCon='center'
			flexGap='1rem'
			sx={{ px: 1 }}
		>
			<TransactionCompleted />
			<Typography variant='h4' fontWeight={600} textAlign='center' mt={-3}>
				Order was Successfully Completed
			</Typography>
			<Typography variant='h5' textAlign='center'>
				Thank you for shopping with us {state?.userName}
			</Typography>
			<Typography variant='body1' textAlign='center' mt={3}>
				You will be redirected back to Homepage.
			</Typography>
		</StyledFlexContainer>
	);
};

export default SuccessfulMessage;
