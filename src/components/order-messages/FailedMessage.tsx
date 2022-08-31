import React from 'react';
import Typography from '@mui/material/Typography';
import TransactionFailed from '../orders-messages-animation/TransactionFailed';
import { StyledFlexContainer } from '../../styles/shared/flexContainer';

type FailedMessageProps = {
	state: {
		userName: string;
		errorMessage: string;
	};
};

const FailedMessage = ({ state }: FailedMessageProps) => {
	return (
		<StyledFlexContainer
			flexDir='column'
			alignIte='center'
			justifyCon='center'
			flexGap='1rem'
			sx={{ px: 1 }}
		>
			<TransactionFailed />
			<Typography variant='h4' fontWeight={600} textAlign='center' mt={-3}>
				Order was not successful
			</Typography>
			<Typography variant='h5' textAlign='center'>
				{state.errorMessage}
			</Typography>
			<Typography variant='h5' textAlign='center'>
				Please Try Again.
			</Typography>
			<Typography variant='body1' textAlign='center' mt={3}>
				You will be redirected back to checkout.
			</Typography>
		</StyledFlexContainer>
	);
};

export default FailedMessage;
