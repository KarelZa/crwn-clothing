require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_KEY);

exports.handler = async (event) => {
	try {
		const { amount } = JSON.parse(event.body); // getting spent amount out of request
		const paymentIntent = await stripe.paymentIntents.create({
			amount: amount,
			currency: 'czk', // in what currency
			payment_method_types: ['card'], // payment method
		});
		// Successful
		return {
			statusCode: 200,
			body: JSON.stringify({ paymentIntent }),
		};
	} catch (error) {
		console.log({ error });
		// Failed
		return {
			statusCode: 400,
			body: JSON.stringify({ error }),
		};
	}
};
