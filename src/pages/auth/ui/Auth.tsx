import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useAuth } from '@/shared/hooks/useAuth';
import { Button } from '@/shared/ui/Button';
import { Heading } from '@/shared/ui/Heading';
import Meta from '@/shared/utils/meta/Meta';

import { IAuthInput } from '../types/auth.interface';

import styles from './Auth.module.scss';
import { useAuthRedirect } from '@/pages/auth/hooks/useAuthRedirect';

export const Auth: FC = () => {
	const [type, setType] = useState<'login' | 'register'>('login');
	useAuthRedirect();

	const { isLoading } = useAuth();

	const {
		register: RegisterInput,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IAuthInput>({
		mode: 'onChange',
	});

	const login = (data: IAuthInput) => {};
	const register = (data: IAuthInput) => {};

	const onSubmit: SubmitHandler<IAuthInput> = data => {
		if (type === 'login') login(data);
		else if (type === 'register' && data) register(data);

		reset();
	};

	if (isLoading) return <div>Loading...</div>;

	return (
		<Meta title="Auth">
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Auth" className="mb-6" />

					{/* fields */}

					<div className={styles.buttons}>
						<Button type="submit" onClick={() => setType('login')} disabled={isLoading}>
							Login
						</Button>
						<Button type="submit" onClick={() => setType('register')} disabled={isLoading}>
							Register
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	);
};
