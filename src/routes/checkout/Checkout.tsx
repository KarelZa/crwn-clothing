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
import { Divider } from '@mui/material';
import { TbTruckDelivery } from 'react-icons/tb';

type CheckoutProps = {
	discountCode?: string | undefined;
};

// Rules
const schema: yup.SchemaOf<CheckoutProps> = yup.object({
	discountCode: yup.string().defined(),
});

const Checkout = () => {
	const { cartItems, activateDiscount, discount } = useCartContext();
	const productsPrice = discount.isActivated
		? (
				cartItems.reduce((accu, curr) => accu + curr.price * curr.quantity, 0) *
				discount.discountAmount
		  ).toFixed()
		: cartItems.reduce((accu, curr) => accu + curr.price * curr.quantity, 0);
	const { control, handleSubmit, reset } = useForm({
		resolver: yupResolver(schema),
	});
	const deliveryPrice = 89;
	const forFreeDel = 1200;
	let barFillWidth = '0%'; // for css height style
	if (forFreeDel > 0) {
		barFillWidth = Math.round((+productsPrice / 1200) * 100) + '%'; // Calculation of the filling inside bar
	}

	const formSubmitHandler = (data: CheckoutProps) => {
		if (data.discountCode === '#today15') {
			activateDiscount(0.85);
		} else if (data.discountCode === '#today20') {
			activateDiscount(0.8);
		}
		reset();
	};

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
							{discount.isActivated ? (
								<div className='discount-badge'>
									<Typography component={'p'} variant='button'>
										Code: &#35;TODAY{discount.discountAmount === 0.85 ? 15 : 20}{' '}
										(-
										{discount.discountAmount === 0.85 ? 15 : 20}%)
									</Typography>
									<Typography
										component={'span'}
										variant='button'
										fontWeight={800}
										onClick={() => activateDiscount(0)}
									>
										&#10006;
									</Typography>
								</div>
							) : (
								<>
									<Typography component={'h6'} variant='overline'>
										Gift / Discount Code
									</Typography>
									<StyledSignUpForm onSubmit={handleSubmit(formSubmitHandler)}>
										<div className='discount-input-container'>
											<CustomInput
												name='discountCode'
												control={control}
												defaultValue=''
												placeHolder='ENTER CODE'
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
								</>
							)}
						</div>
						<div className='delivery'>
							<div className='delivery-message'>
								<TbTruckDelivery />
								{productsPrice >= 1200 ? (
									<Typography component={'p'} variant='overline'>
										Congratz, <b>you have free delivery</b>
									</Typography>
								) : (
									<Typography component={'p'} variant='overline'>
										Buy for <b> {forFreeDel - +productsPrice} </b> CZK and GET
										FREE DELIVERY
									</Typography>
								)}
							</div>
							<div className='delivery-progress-bar'>
								<div className='delivery-progress--inner'>
									<div
										className='delivery-progress-bar--fill'
										style={{ width: barFillWidth }}
									></div>
								</div>
							</div>
						</div>
						<div className='pricing'>
							<div>
								<Typography component={'span'} variant='body1'>
									Price of products
								</Typography>
								{cartItems.length > 0 && (
									<Typography component={'span'} variant='body1' fontWeight={800}>
										{productsPrice} CZK
									</Typography>
								)}
							</div>
							<div>
								<Typography component={'span'} variant='body1'>
									Delivery
								</Typography>
								<Typography component={'span'} variant='body1' fontWeight={800}>
									{productsPrice >= 1200 ? 'FREE' : `${deliveryPrice} CZK`}
								</Typography>
							</div>
							<Divider role='presentation' sx={{ mt: 1 }} />
							<div>
								<Typography component={'span'} variant='body1'>
									Total Price
								</Typography>
								<Typography component={'span'} variant='body1' fontWeight={800}>
									{productsPrice >= 1200
										? `${+productsPrice} CZK`
										: `${+productsPrice + deliveryPrice} CZK`}
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
