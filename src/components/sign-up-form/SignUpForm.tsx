import { useForm } from 'react-hook-form';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocFromAuth,
} from '../../utils/firebase/firebase';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomInput from './CustomInput';
import { StyledContainer } from '../../styles/sign-up-form/signUpContainer';
import { StyledSignUpForm } from '../../styles/sign-up-form/signUpForm';
import { StyledButton } from '../../styles/shared/button';

export interface SignUpFormProps {
	displayName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

// Rules
const schema: yup.SchemaOf<SignUpFormProps> = yup.object({
	displayName: yup
		.string()
		.required('Display Name is a required field')
		.min(5, 'Display Name must be at least 5 characters'),
	email: yup.string().required().email(),
	password: yup.string().required().min(8),
	confirmPassword: yup.string().required('Confirm Password is a required field'),
});

const SignUpForm = () => {
	const { control, handleSubmit, reset } = useForm<SignUpFormProps>({
		resolver: yupResolver(schema),
	});

	const formSubmitHandler = async (data: SignUpFormProps) => {
		if (data.password !== data.confirmPassword) {
			alert('❌ Passwords do not match !');
			return;
		}

		try {
			await createAuthUserWithEmailAndPassword(data.email, data.password, data.displayName);
			reset();
		} catch (error: any) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Cannot create user, Email is already in use');
			} else {
				console.log('User creation encountered an error', error);
			}
		}
	};

	return (
		<StyledContainer flexDir='column'>
			<h2>Don't have an account?</h2>
			<span>Sign Up With your email & password</span>
			<StyledSignUpForm onSubmit={handleSubmit(formSubmitHandler)} flexDir='column'>
				<CustomInput
					name='displayName'
					label='Display Name'
					control={control}
					defaultValue=''
				/>
				<CustomInput name='email' label='Email' control={control} defaultValue='' />
				<CustomInput
					name='password'
					label='Password'
					control={control}
					defaultValue=''
					inputType='password'
				/>
				<CustomInput
					name='confirmPassword'
					label='Confirm Password'
					control={control}
					defaultValue=''
					inputType='password'
				/>
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
			</StyledSignUpForm>
		</StyledContainer>
	);
};

export default SignUpForm;
