import React from 'react';
import { useMediaQuery } from '@mui/material';
import SignInForm from '../../components/sign-in-form/SignInForm';
import SignUpForm from '../../components/sign-up-form/SignUpForm';
import { theme } from '../../styles/appTheme/theme';
import { StyledFlexContainer } from '../../styles/shared/flexContainer';

type Props = {};

const Authentication = (props: Props) => {
	return (
		<StyledFlexContainer
			flexDir={useMediaQuery(theme.breakpoints.down('md')) ? 'column' : 'row'}
			flexGap='2rem'
		>
			<SignInForm />
			<SignUpForm />
		</StyledFlexContainer>
	);
};

export default Authentication;
