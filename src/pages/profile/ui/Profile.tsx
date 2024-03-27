import { Button } from '@/shared/ui/ui/Button';
import { FC } from 'react';
import { Heading } from '@/shared/ui/ui/Heading';
import { IUserEdit } from '@/pages/userEdit/types/user-edit.interface';
import { Input } from '@/shared/ui/ui/Input';
import Meta from '@/shared/utils/meta/Meta';
import { SkeletonLoader } from '@/shared/ui/ui/SkeletonLoader';
import styles from './Profile.module.scss';
import { useForm } from 'react-hook-form';
import { useProfile } from '@/pages/profile/hooks/useProfile';

export const Profile: FC = () => {

	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
	} = useForm<IUserEdit>({
		mode: 'onChange',
	});

	const { onSubmit, isLoading } = useProfile(setValue);

	return (
		<Meta title="Profile">
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Heading title="Profile" className="mb-6" />
				{isLoading ? (
					<SkeletonLoader className="mb-4" count={2} />
				) : (
					<Input {...register('email', { required: 'Email is required' })} placeholder="Email" error={errors.email} />
				)}

				<div className={styles.buttons}>
					<Button type="submit" disabled={isLoading}>
						Update
					</Button>
				</div>
			</form>
		</Meta>
	);
};
