import { useMediaQuery } from '@mui/material';
import { useLottie } from 'lottie-react';
import paymentFailedAnimation from '../../assets/paymentFailed.json';
import { theme } from '../../styles/appTheme/theme';

const TransactionFailed = () => {
	const style = {
		height: 500,
		margin: `${useMediaQuery(theme.breakpoints.up('md')) ? '0' : '-4rem'} 0`,
	};
	const options = {
		animationData: paymentFailedAnimation,
		loop: false,
		autoplay: true,
	};

	const { View } = useLottie(options, style);

	return View;
};

export default TransactionFailed;
