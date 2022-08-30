import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SuccessfulMessage from '../../components/order-successful/SuccessfulMessage';

type SucceededProps = {
	state?: {
		userName: string;
	};
};

const Failed = (props: SucceededProps) => {
	const { state } = useLocation() as SucceededProps;

	if (!state) {
		return <Navigate to='/' replace={true} />; // <-- return Redirect
	}

	return <SuccessfulMessage state={state} />;
};

export default Failed;
