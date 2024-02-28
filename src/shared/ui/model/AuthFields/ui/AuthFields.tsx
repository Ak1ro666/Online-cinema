import { FC, InputHTMLAttributes } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';

import { Input } from '@/shared/ui/ui/Input';
import { validEmail } from '@/shared/utils/string/validEmail';

interface IAuthFields extends InputHTMLAttributes<HTMLInputElement> {
	register: UseFormRegister<any>;
	formState: FormState<any>;
	isPasswordRequired?: boolean;
}

export const AuthFields: FC<IAuthFields> = props => {
	const {
		register,
		formState: { errors },
		isPasswordRequired = false,
	} = props;

	return (
		<>
			<Input
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email',
					},
				})}
				placeholder="Email"
				error={errors.email}
			/>
			<Input
				type="password"
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Min length should more 6 symbols',
								},
							}
						: {},
				)}
				placeholder="Password"
				error={errors.password}
			/>
		</>
	);
};
