import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import {
	StyledCardInputWrapper,
	StyledPaymentForm,
} from '../../styles/payment-form/PaymentForm.styled';
import { StyledButton } from '../../styles/shared/button';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { StripeCardElement } from '@stripe/stripe-js/types/stripe-js';
import { selectCartItemsPrice } from '../../store/cart/cart.selector';
import { CircularProgress, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type Props = {};

const PaymentForm = (props: Props) => {
	const user = useSelector(selectCurrentUser);
	const totalItemsPrice = useSelector(selectCartItemsPrice);
	const stripe = useStripe(); // instance of stripe, makes striple in needed format
	const elements = useElements();
	const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
	const navigate = useNavigate();

	const paymentHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// either of instances missing do not continue
		if (!stripe || !elements) return;
		setIsPaymentProcessing(true);

		// fetch of payment intent
		const response = await fetch('/.netlify/functions/create-payment-intent', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ amount: totalItemsPrice * 100 }),
		}).then((res) => res.json());

		const clientSecret = response.paymentIntent.client_secret;

		const paymentResult = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement) as StripeCardElement,
				billing_details: {
					name: user?.displayName ?? 'Guest',
				},
			},
		});

		console.log(paymentResult);
		setIsPaymentProcessing(false);
		if (paymentResult.error) {
			alert(paymentResult.error.message);
		} else {
			if (paymentResult.paymentIntent.status === 'succeeded') {
				// alert('Payment Successful');
				navigate('successful-order', {
					state: { userName: user?.displayName ?? 'Guest' },
					replace: false,
				});
			}
		}
	};

	const inputStyle = {
		'::placeholder': {
			color: '#ADADAD',
		},
	};

	return (
		<StyledPaymentForm onSubmit={paymentHandler}>
			<Typography variant='subtitle1' sx={{ mb: -1 }}>
				<strong>Payment</strong>
			</Typography>
			<StyledCardInputWrapper>
				<CardElement options={{ style: { base: inputStyle } }} />
			</StyledCardInputWrapper>
			{isPaymentProcessing ? (
				<CircularProgress sx={{ margin: '0 auto' }} color='inherit' />
			) : (
				<StyledButton
					variant='contained'
					type='submit'
					size='large'
					bgColor='black'
					textColor='white'
					bgHover='black'
					sx={{ width: '100%' }}
				>
					Pay Now
				</StyledButton>
			)}
		</StyledPaymentForm>
	);
};

export default PaymentForm;
