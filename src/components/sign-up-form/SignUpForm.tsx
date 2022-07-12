import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface SignUpFormProps {
	displayName?: string;
	email?: string;
	password?: string;
	comfirmPassword?: string;
}

// Rules
const schema: yup.SchemaOf<SignUpFormProps> = yup.object({
	displayName: yup.string().required().min(2),
	email: yup.string().required().email(),
	password: yup.string().required(),
	comfirmPassword: yup.string().required(),
});

const SignUpForm = () => {
	const { control, handleSubmit, reset } = useForm<SignUpFormProps>({
		resolver: yupResolver(schema),
	});
	return (
		<div>
			<h1>Sign Up With your email & password</h1>
			<form>
				<TextField id='outlined-basic' label='Display Name' variant='outlined' />
				<TextField id='outlined-basic' label='Email' variant='outlined' />
				<Button variant='outlined' type='submit' color='primary' size='large'>
					SEND MESSAGE
				</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
