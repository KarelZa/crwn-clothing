import React, { useContext } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ShoppingCartContext } from '../../contexts/cart.context';
import { StyledButton } from '../../styles/shared/button';
import CustomInput from '../sign-up-form/CustomInput';
import { useForm } from 'react-hook-form';
import { StyledSidebar } from '../../styles/checkout-sidebar/CheckoutSidebar.styled';
import DeliveryWidget from '../delivery-widget/DeliveryWidget';
import { StyledForm } from '../../styles/sign-up-form/signUpForm';
interface CheckoutSidebarProps {
	discountCode?: string | undefined;
}

// Rules
const schema: yup.SchemaOf<CheckoutSidebarProps> = yup.object({
	discountCode: yup.string().required('Have you entered code?'),
});

const CheckoutSidebar = () => {
	const { activateDiscount, discount, cartItemsPrice, freeDeliveryThreshold } =
		useContext(ShoppingCartContext);
	const deliveryPrice = 89;

	const { control, handleSubmit, reset } = useForm({
		resolver: yupResolver(schema),
		mode: 'onSubmit',
	});

	const formSubmitHandler = (data: CheckoutSidebarProps) => {
		if (data.discountCode === '#today15') {
			activateDiscount(!discount.isActivated, 0.85);
			reset();
		} else if (data.discountCode === '#today20') {
			activateDiscount(!discount.isActivated, 0.8);
			reset();
		}
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
								onClick={() => activateDiscount(!discount.isActivated, 0)}
							>
								&#10006;
							</Typography>
						</div>
					) : (
						<>
							<Typography component={'h6'} variant='overline'>
								Gift / Discount Code
							</Typography>
							<StyledForm onSubmit={handleSubmit(formSubmitHandler)}>
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
							</StyledForm>
						</>
					)}
				</div>
				<DeliveryWidget />
				<div className='pricing'>
					<div>
						<Typography component={'span'} variant='body1'>
							Price of products
						</Typography>
						<Typography component={'span'} variant='body1' fontWeight={800}>
							{cartItemsPrice} CZK
						</Typography>
					</div>
					<div>
						<Typography component={'span'} variant='body1'>
							Delivery
						</Typography>
						<Typography component={'span'} variant='body1' fontWeight={800}>
							{cartItemsPrice >= freeDeliveryThreshold
								? 'FREE'
								: `${deliveryPrice} CZK`}
						</Typography>
					</div>
					<Divider role='presentation' sx={{ mt: 1 }} />
					<div>
						<Typography component={'span'} variant='body1'>
							Total Price
						</Typography>
						<Typography component={'span'} variant='body1' fontWeight={800}>
							{cartItemsPrice >= freeDeliveryThreshold
								? `${cartItemsPrice} CZK`
								: `${+cartItemsPrice + deliveryPrice} CZK`}
						</Typography>
					</div>
				</div>
			</div>
		</StyledSidebar>
	);
};

export default CheckoutSidebar;
