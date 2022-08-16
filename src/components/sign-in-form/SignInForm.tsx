import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { StyledContainer } from '../../styles/sign-up-form/signUpContainer';
import { StyledSignUpForm } from '../../styles/sign-up-form/signUpForm';
import { StyledButton } from '../../styles/shared/button';
import CustomInput from '../sign-up-form/CustomInput';
import {
	createUserDocFromAuth,
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
} from '../../utils/firebase/firebaseInJS';
import { StyledFlexContainer } from '../../styles/shared/flexContainer';

export interface SignInFormProps {
	email: string;
	password: string;
}

// Rules
const schema: yup.SchemaOf<SignInFormProps> = yup.object({
	email: yup.string().required().email(),
	password: yup.string().required().min(8),
});

const SignInForm = () => {
	const { control, handleSubmit, reset } = useForm<SignInFormProps>({
		resolver: yupResolver(schema),
	});

	const logGoogleUser = async () => {
		await signInWithGooglePopup();
	};

	const formSubmitHandler = async (data: SignInFormProps) => {
		try {
			const { user } = await signInAuthUserWithEmailAndPassword(data.email, data.password);
			reset();
		} catch (error: any) {
			if (error.code === 'auth/wrong-password') {
				alert('Cannot sign-in, Wrong password was entered!');
			} else if (error.code === 'auth/user-not-found') {
				alert('User has not been found!');
			} else {
				console.log('User creation encountered an error', error);
			}
		}
	};

	return (
		<StyledContainer flexDir='column'>
			<h2>Already have an account with us?</h2>
			<span>Sign In With your email & password</span>
			<StyledSignUpForm onSubmit={handleSubmit(formSubmitHandler)} flexDir='column'>
				<CustomInput name='email' label='Email' control={control} defaultValue='' />
				<CustomInput
					name='password'
					label='Password'
					control={control}
					defaultValue=''
					inputType='password'
				/>
				<StyledFlexContainer flexGap='1rem'>
					<StyledButton
						variant='contained'
						type='submit'
						size='large'
						bgColor='black'
						textColor='white'
						bgHover='black'
					>
						Sign In
					</StyledButton>
					<StyledButton
						variant='contained'
						size='large'
						bgColor='#3581B8'
						textColor='white'
						bgHover='#3581B8'
						onClick={logGoogleUser}
					>
						Google Account
					</StyledButton>
				</StyledFlexContainer>
			</StyledSignUpForm>
		</StyledContainer>
	);
};

export default SignInForm;
