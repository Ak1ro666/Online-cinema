import { Controller, useForm } from 'react-hook-form';

import { AdminNavigation } from '@/widgets/AdminNavigation';
import { Button } from '@/shared/ui/ui/Button';
import { FC } from 'react';
import { Heading } from '@/shared/ui/ui/Heading';
import { IActorEdit } from '@/pages/actorEdit/types/actor-edit.interface';
import { Input } from '@/shared/ui/ui/Input';
import Meta from '@/shared/utils/meta/Meta';
import { SkeletonLoader } from '@/shared/ui/ui/SkeletonLoader';
import { SlugField } from '@/shared/ui/model/SlugField';
import formStyles from '@/app/assets/styles/admin-form.module.scss';
import { generateSlug } from '@/shared/utils/string/generateSlug';
import { useActorEdit } from '@/pages/actorEdit/hooks/useActorEdit';

export const ActorEdit: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<IActorEdit>({
		mode: 'onChange',
	});

	const { isLoading, onSubmit } = useActorEdit(setValue);

	return (
		<Meta title="Edit actor">
			<AdminNavigation />
			<Heading title="Edit actor" />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<Input {...register('name', { required: 'Name is required' })} placeholder="Name" error={errors.name} />

							<div>
								<SlugField
									register={register}
									error={errors.slug}
									generate={() => {
										setValue('slug', generateSlug(getValues('name')));
									}}
								/>
							</div>
						</div>

						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	);
};
