import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { StyledPaymentForm } from '../../styles/payment-form/PaymentForm.styled';
import { StyledButton } from '../../styles/shared/button';

type Props = {};

const PaymentForm = (props: Props) => {
	const striple = useStripe(); // instance of stripe, makes striple in needed format
	const elements = useElements();
	const paymentHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// either of instances missing do not continue
		if (!striple || !elements) return;

		// fetch of payment intent - inc payment
	};
	return (
		<StyledPaymentForm>
			<CardElement />
			<StyledButton
				variant='contained'
				type='submit'
				size='large'
				bgColor='black'
				textColor='white'
				bgHover='black'
			>
				Pay Now
			</StyledButton>
		</StyledPaymentForm>
	);
};

export default PaymentForm;
