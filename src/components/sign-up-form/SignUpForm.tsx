import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface SignUpFormProps {
	displayName: string;
	email: string;
	password: string;
	comfirmPassword: string;
}

// Rules
const schema: yup.SchemaOf<SignUpFormProps> = yup.object({
	displayName: yup.string().required().min(2),
	email: yup.string().required().email(),
	password: yup.string().required(),
	comfirmPassword: yup.string().required(),
});

const SignUpForm = (props: SignUpFormProps) => {
	const { control, handleSubmit, reset } = useForm<SignUpFormProps>({
		resolver: yupResolver(schema),
	});
	return (
		<div>
			<h1>Sign Up With your email & password</h1>
			<form></form>
		</div>
	);
};

export default SignUpForm;
