import React, { useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import FailedMessage from '../../components/order-messages/FailedMessage';
import SuccessfulMessage from '../../components/order-messages/SuccessfulMessage';

type OrderProps = {
	state?: {
		status: 'succeeded' | 'failed';
		userName: string;
		errorMessage: string;
	};
};

const Order = (props: OrderProps) => {
	const { state } = useLocation() as OrderProps;
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate(state?.status === 'failed' ? '/checkout' : '/');
		}, 4000);
		return clearTimeout();
	}, []);

	if (!state) {
		return <Navigate to='/' replace={true} />; // <-- return Redirect
	} else if (state.status === 'succeeded') {
		return <SuccessfulMessage state={state} />;
	} else if (state.status === 'failed') {
		return <FailedMessage state={state} />;
	}
	return <></>;
};

export default Order;
