import { useMediaQuery } from '@mui/material';
import { useLottie } from 'lottie-react';
import paymentSuccessfulAnimation from '../../assets/paymentSuccessful.json';
import { theme } from '../../styles/appTheme/theme';

const TransactionCompleted = () => {
	const style = {
		height: 500,
		margin: `${useMediaQuery(theme.breakpoints.up('md')) ? '0' : '-4rem'} 0`,
	};
	const options = {
		animationData: paymentSuccessfulAnimation,
		loop: false,
		autoplay: true,
	};

	const { View } = useLottie(options, style);

	return View;
};

export default TransactionCompleted;
