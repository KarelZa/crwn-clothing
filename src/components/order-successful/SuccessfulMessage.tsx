import React from 'react';
import Typography from '@mui/material/Typography';
import TransactionCompleted from '../order-completed/TransactionCompleted';
import { Navigate, useLocation } from 'react-router-dom';
import { StyledFlexContainer } from '../../styles/shared/flexContainer';

type SuccessfulOrderProps = {
	state?: {
		userName: string;
	};
};

const SuccessfulMessage = ({ state }: SuccessfulOrderProps) => {
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
				Your Order was Successfully Completed
			</Typography>
			<Typography variant='h5' textAlign='center'>
				Thank you for shopping with us {state?.userName}
			</Typography>
		</StyledFlexContainer>
	);
};

export default SuccessfulMessage;
