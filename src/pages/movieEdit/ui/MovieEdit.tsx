import { AdminNavigation } from '@/widgets/AdminNavigation';
import { Button } from '@/shared/ui/ui/Button';
import { FC } from 'react';
import { Heading } from '@/shared/ui/ui/Heading';
import { IMovieEdit } from '../types/movie-edit.interface';
import { Input } from '@/shared/ui/ui/Input';
import Meta from '@/shared/utils/meta/Meta';
import { SkeletonLoader } from '@/shared/ui/ui/SkeletonLoader';
import { SlugField } from '@/shared/ui/model/SlugField';
import formStyles from '@/app/assets/styles/admin-form.module.scss';
import { generateSlug } from '@/shared/utils/string/generateSlug';
import { useForm } from 'react-hook-form';
import { useMovieEdit } from '../hooks/useMovieEdit';

export const MovieEdit: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<IMovieEdit>({
		mode: 'onChange',
	});

	const { isLoading, onSubmit } = useMovieEdit(setValue);

	return (
		<Meta title="Edit movie">
			<AdminNavigation />
			<Heading title="Edit movie" />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<Input
								{...register('title', { required: 'Title is required' })}
								placeholder="Title"
								error={errors.title}
							/>

							<div>
								<SlugField
									register={register}
									error={errors.slug}
									generate={() => {
										setValue('slug', generateSlug(getValues('title')));
									}}
								/>
							</div>

							<Input
								{...register('parameters.country', { required: 'Country is required' })}
								placeholder="Country"
								error={errors.parameters?.country}
								style={{ width: '31%' }}
							/>

							<Input
								{...register('parameters.duration', { required: 'Duration is required' })}
								placeholder="Duration"
								error={errors.parameters?.duration}
								style={{ width: '31%' }}
							/>

							<Input
								{...register('parameters.year', { required: 'Year is required' })}
								placeholder="Year"
								error={errors.parameters?.year}
								style={{ width: '31%' }}
							/>
						</div>

						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	);
};
