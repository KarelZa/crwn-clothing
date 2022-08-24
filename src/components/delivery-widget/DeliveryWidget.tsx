import React from 'react';
import Typography from '@mui/material/Typography';
import { TbTruckDelivery } from 'react-icons/tb';
import { StyledDeliveryWidget } from '../../styles/delivery-widget/DeliveryWidget.styled';
import { useSelector } from 'react-redux';
import { selectCartItemsPrice, selectFreeDeliveryAmount } from '../../store/cart/cart.selector';

type DeliveryWidgetProps = {};

const DeliveryWidget = (props: DeliveryWidgetProps) => {
	const cartItemsPrice = useSelector(selectCartItemsPrice);
	const freeDeliveryThreshold = useSelector(selectFreeDeliveryAmount);
	let barFillWidth = '0%'; // for bar filling width
	if (cartItemsPrice > 0) {
		barFillWidth = Math.round((cartItemsPrice / 1200) * 100) + '%'; // Calculation of the filling
	}

	return (
		<StyledDeliveryWidget className='delivery'>
			<div className='delivery-message'>
				<TbTruckDelivery />
				{cartItemsPrice >= freeDeliveryThreshold ? (
					<Typography component={'p'} variant='overline'>
						Congrats, <b>you have free delivery</b>
					</Typography>
				) : (
					<Typography component={'p'} variant='overline'>
						Buy for <strong> {freeDeliveryThreshold - cartItemsPrice} </strong> CZK and
						GET FREE DELIVERY
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
		</StyledDeliveryWidget>
	);
};

export default DeliveryWidget;
