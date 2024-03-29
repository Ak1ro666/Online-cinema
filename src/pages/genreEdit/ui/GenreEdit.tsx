import { Controller, useForm } from 'react-hook-form';

import { AdminNavigation } from '@/widgets/AdminNavigation';
import { Button } from '@/shared/ui/ui/Button';
import { FC } from 'react';
import { Heading } from '@/shared/ui/ui/Heading';
import { IGenreEdit } from '@/pages/genreEdit/types/genre-edit.interface';
import { Input } from '@/shared/ui/ui/Input';
import Meta from '@/shared/utils/meta/Meta';
import { SkeletonLoader } from '@/shared/ui/ui/SkeletonLoader';
import { SlugField } from '@/shared/ui/model/SlugField';
import dynamic from 'next/dynamic';
import formStyles from '@/app/assets/styles/admin-form.module.scss';
import { generateSlug } from '@/shared/utils/string/generateSlug';
import { stripHtml } from 'string-strip-html';
import { useGenreEdit } from '@/pages/genreEdit/hooks/useGenreEdit';

const DynamicTextEditor = dynamic(() => import('@/entities/TextEditor').then(module => module.TextEditor), {
	ssr: false,
});

export const GenreEdit: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IGenreEdit>({
		mode: 'onChange',
	});

	const { isLoading, onSubmit } = useGenreEdit(setValue);

	return (
		<Meta title="Edit genre">
			<AdminNavigation />
			<Heading title="Edit genre" />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<Input
								{...register('name', { required: 'Name is required' })}
								placeholder="Name"
								error={errors.name}
								style={{ width: '31%' }}
							/>

							<div style={{ width: '31%' }}>
								<SlugField
									register={register}
									error={errors.slug}
									generate={() => {
										setValue('slug', generateSlug(getValues('name')));
									}}
								/>
							</div>

							<Input
								{...register('icon', { required: 'Icon is required' })}
								placeholder="Icon"
								error={errors.name}
								style={{ width: '31%' }}
							/>
						</div>

						<Controller
							control={control}
							name="description"
							defaultValue=""
							render={({ field, fieldState: { error } }) => (
								<DynamicTextEditor
									onChange={field.onChange}
									value={field.value}
									error={error}
									placeholder="Description"
								/>
							)}
							rules={{
								validate: {
									required: v => (v && stripHtml(v).result.length > 0) || 'Description is required',
								},
							}}
						/>

						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	);
};
