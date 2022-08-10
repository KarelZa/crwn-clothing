import TextField from '@mui/material/TextField';
import React from 'react';
import {
	Control,
	FieldPath,
	FieldValues,
	useController,
	UseControllerProps,
} from 'react-hook-form';
import { SignInFormProps } from '../sign-in-form/SignInForm';
import { SignUpFormProps } from './SignUpForm';

interface CustomInputProps {
	label?: string;
	placeHolder?: string;
	inputType?: string;
}

interface InputProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
	name: TName;
	control: Control<TFieldValues>;
}

function CustomInput<InputProps>(props: CustomInputProps & UseControllerProps<InputProps>) {
	const {
		field: { ref, ...field }, // done this way to allow on focus on error
		fieldState,
	} = useController(props);

	return (
		<TextField
			{...field}
			inputRef={ref}
			label={props.label}
			type={props.inputType}
			variant='outlined'
			error={!!fieldState.error}
			helperText={fieldState.error?.message || ''}
			placeholder={props.placeHolder}
			inputProps={{
				'aria-label': props.name,
			}}
		/>
	);
}

export default CustomInput;
