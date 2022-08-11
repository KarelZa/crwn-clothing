import { Divider, Typography } from '@mui/material';
import React from 'react';
import { useCartContext } from '../../contexts/cart.context';
import { StyledButton } from '../../styles/shared/button';
import { StyledSignUpForm } from '../../styles/sign-up-form/signUpForm';
import CustomInput from '../sign-up-form/CustomInput';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { TbTruckDelivery } from 'react-icons/tb';
import { StyledSidebar } from '../../styles/checkout-sidebar/CheckoutSidebar.styled';

interface CheckoutSidebarProps {
	discountCode?: string | undefined;
}

interface Props {
	productsPrice: string | number;
}

// Rules
const schema: yup.SchemaOf<CheckoutSidebarProps> = yup.object({
	discountCode: yup.string().defined(),
});

const CheckoutSidebar = ({ productsPrice }: Props) => {
	const { activateDiscount, discount } = useCartContext();
	const deliveryPrice = 89;
	const forFreeDel = 1200;
	let barFillWidth = '0%'; // for bar filling width

	const { control, handleSubmit, reset } = useForm({
		resolver: yupResolver(schema),
	});

	if (+productsPrice > 0) {
		barFillWidth = Math.round((+productsPrice / 1200) * 100) + '%'; // Calculation of the filling
	}

	const formSubmitHandler = (data: CheckoutSidebarProps) => {
		if (data.discountCode === '#today15') {
			activateDiscount(0.85);
		} else if (data.discountCode === '#today20') {
			activateDiscount(0.8);
		}
		reset();
	};

	return (
		<StyledSidebar>
			<div className='sticky-wrapper'>
				<div className='discount-container'>
					{discount.isActivated ? (
						<div className='discount-badge'>
							<Typography component={'p'} variant='button'>
								Code: &#35;TODAY{discount.discountAmount === 0.85 ? 15 : 20} (-
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
								Buy for <b> {forFreeDel - +productsPrice} </b> CZK and GET FREE
								DELIVERY
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
						<Typography component={'span'} variant='body1' fontWeight={800}>
							{productsPrice} CZK
						</Typography>
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
		</StyledSidebar>
	);
};

export default CheckoutSidebar;
