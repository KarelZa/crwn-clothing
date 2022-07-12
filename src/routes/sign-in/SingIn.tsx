import React from 'react';
import SignUpForm from '../../components/sign-up-form/SignUpForm';
import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase';

type Props = {};

const SingIn = (props: Props) => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocFromAuth(user);
	};

	return (
		<div>
			<h1>SingIn Page</h1>
			<button onClick={logGoogleUser}>Sign in with google Popup</button>
			<SignUpForm />
		</div>
	);
};

export default SingIn;
