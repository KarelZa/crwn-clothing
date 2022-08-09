import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import CustomInput from '../../components/sign-up-form/CustomInput';
import { useCartContext } from '../../contexts/cart.context';
import { StyledCheckout } from '../../styles/checkout/Checkout.styled';
import { StyledSignUpForm } from '../../styles/sign-up-form/signUpForm';
import { StyledButton } from '../../styles/shared/button';

type CheckoutProps = {
	discountCode?: string | undefined;
};

// Rules
const schema: yup.SchemaOf<CheckoutProps> = yup.object({
	discountCode: yup.string().defined(),
});

const Checkout = () => {
	const { cartItems } = useCartContext();
	let totalPrice = cartItems.reduce((accu, curr) => accu + curr.price * curr.quantity, 0);
	const [sleva, setSleva] = useState(0);
	const { control, handleSubmit, reset } = useForm({
		resolver: yupResolver(schema),
	});

	const formSubmitHandler = (data: CheckoutProps) => {
		if (data.discountCode === 'today15') {
			console.log('JE TO 15 VOLE');
			console.log(data);
			setSleva(0.85);
		} else if (data.discountCode === 'today20') {
			console.log('JE TO 20 VOLE');
			console.log(data);
			setSleva(0.8);
		} else {
			console.log('MAS TO SPATNE');
			console.log(data);
		}
	};
	console.log(sleva);
	return (
		<>
			<Typography component={'h4'} variant='h4' fontWeight={600} sx={{ mb: 3 }}>
				MY BASKET
			</Typography>
			<StyledCheckout>
				<div className='checkout-items'>
					{cartItems.map((item) => {
						return <CheckoutItem key={item.id} checkoutItem={item} />;
					})}
				</div>
				<div className='sidebar'>
					<div className='sticky-wrapper'>
						<div className='discount'>
							<StyledSignUpForm onSubmit={handleSubmit(formSubmitHandler)}>
								<Typography component={'h6'} variant='overline'>
									Gift / Discount Code
								</Typography>
								<div className='discount-input-container'>
									<CustomInput
										name='discountCode'
										control={control}
										defaultValue=''
									/>
									<StyledButton
										variant='contained'
										type='submit'
										size='large'
										bgColor='black'
										textColor='white'
										bgHover='black'
									>
										USE
									</StyledButton>
								</div>
							</StyledSignUpForm>
						</div>
						<div className='pricing'>
							<div>
								<Typography component={'span'} variant='body1'>
									Price of products
								</Typography>
								{cartItems.length > 0 && (
									<Typography component={'span'} variant='body1' fontWeight={800}>
										{sleva === 0 ? totalPrice : totalPrice * sleva} CZK
									</Typography>
								)}
							</div>
							<div>
								<Typography component={'span'} variant='body1'>
									Delivery
								</Typography>
								<Typography component={'span'} variant='body1' fontWeight={800}>
									89 CZK
								</Typography>
							</div>
						</div>
					</div>
				</div>
			</StyledCheckout>
		</>
	);
};

export default Checkout;
