import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { AuthFields } from '@/shared/ui/model/AuthFields';
import { Button } from '@/shared/ui/ui/Button';
import { Heading } from '@/shared/ui/ui/Heading';
import { IAuthInput } from '@/pages/auth/types/auth.interface';
import styles from './auth-form.module.scss';
import { useActions } from '@/shared/hooks/useActions';
import { useAuth } from '@/shared/hooks/useAuth';
import { useAuthRedirect } from '@/pages/auth/hooks/useAuthRedirect';

export const AuthForm: FC = () => {
	const [type, setType] = useState<'login' | 'register'>('login');
	useAuthRedirect();

	const { login, register } = useActions();

	const { isLoading } = useAuth();

	const {
		register: registerInput,
		handleSubmit,
		reset,
		formState,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<IAuthInput> = data => {
		if (type === 'login') login(data);
		else if (type === 'register' && data) register(data);

		reset({
			email: '',
			password: '',
		});
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Heading title="Auth" className="mb-6" />

			<AuthFields formState={formState} register={registerInput} isPasswordRequired />

			<div className={styles.buttons}>
				<Button type="submit" onClick={() => setType('login')} disabled={isLoading}>
					Login
				</Button>
				<Button type="submit" onClick={() => setType('register')} disabled={isLoading}>
					Register
				</Button>
			</div>
		</form>
	);
};
