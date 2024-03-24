import { FC, useState } from 'react';

import { AuthForm } from '@/widgets/AuthForm'
import Meta from '@/shared/utils/meta/Meta';
import styles from './Auth.module.scss';
import { useAuth } from '@/shared/hooks/useAuth';

export const Auth: FC = () => {
	

	const { isLoading } = useAuth();
	

	if (isLoading) return <div>Loading...</div>;

	return (
		<Meta title="Auth">
			<section className={styles.wrapper}>
				<AuthForm />
			</section>
		</Meta>
	);
};
