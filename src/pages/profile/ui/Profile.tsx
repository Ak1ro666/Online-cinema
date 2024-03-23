import { IProfileInput, IProfileProps } from '../types/profile.interface';

import { AuthFields } from '@/shared/ui/model/AuthFields'
import { Button } from '@/shared/ui/ui/Button'
import { FC } from 'react';
import { Heading } from '@/shared/ui/ui/Heading'
import Meta from '@/shared/utils/meta/Meta'
import { SkeletonLoader } from '@/shared/ui/ui/SkeletonLoader'
import styles from './Profile.module.scss';
import { useForm } from 'react-hook-form'
import { useProfile } from '@/pages/profile/hooks/useProfile'

export const Profile: FC<IProfileProps> = () => {

	const {handleSubmit, register, formState, setValue} = useForm<IProfileInput>({
		mode: 'onChange'
	})	

	const { onSubmit, isLoading } = useProfile(setValue)

	return (
		<Meta title='Profile'>
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Heading title="Profile" className="mb-6" />
			{
				isLoading ? <SkeletonLoader count={2} /> : <AuthFields formState={formState} register={register} /> 
			}
			
		
		
			<div className={styles.buttons}>
				<Button type="submit" disabled={isLoading}>
						Update
					</Button>
				</div>
		</form>
	</Meta>
	);
};
