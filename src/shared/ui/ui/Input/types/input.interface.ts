import { InputHTMLAttributes } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export interface IInputProps {
	error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

export type TypeInputProps = IInputProps & InputHTMLAttributes<HTMLInputElement>;

export interface IInput extends TypeInputProps {}
