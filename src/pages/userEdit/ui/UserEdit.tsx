import { AdminNavigation } from '@/widgets/AdminNavigation';
import { Button } from '@/shared/ui/ui/Button';
import { FC } from 'react';
import { Heading } from '@/shared/ui/ui/Heading';
import { IUserEdit } from '@/pages/userEdit/types/user-edit.interface';
import { Input } from '@/shared/ui/ui/Input';
import Meta from '@/shared/utils/meta/Meta';
import { SkeletonLoader } from '@/shared/ui/ui/SkeletonLoader';
import formStyles from '@/app/assets/styles/admin-form.module.scss';
import { useForm } from 'react-hook-form';
import { useUserEdit } from '@/pages/userEdit/hooks/useUserEdit';

export const UserEdit: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<IUserEdit>({
		mode: 'onChange',
	});

	const { isLoading, onSubmit } = useUserEdit(setValue);

	return (
		<Meta title="Edit user">
			<AdminNavigation />
			<Heading title="Edit user" />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<Input
								{...register('email', { required: 'Email is required' })}
								placeholder="Email"
								error={errors.email}
							/>
							<Input
								{...register('isAdmin', { required: 'isAdmin is required' })}
								placeholder="Admin | User"
								error={errors.email}
							/>
							<Button>Update</Button>
						</div>
					</>
				)}
			</form>
		</Meta>
	);
};
