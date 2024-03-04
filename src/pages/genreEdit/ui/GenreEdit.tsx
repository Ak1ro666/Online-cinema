import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Heading } from '@/shared/ui/ui/Heading';
import { Input } from '@/shared/ui/ui/Input';
import { SkeletonLoader } from '@/shared/ui/ui/SkeletonLoader';
import Meta from '@/shared/utils/meta/Meta';

import { useGenreEdit } from '@/pages/genreEdit/hooks/useGenreEdit';
import { IGenreEditInput } from '@/pages/genreEdit/types/genre-edit.interface';
import { AdminNavigation } from '@/widgets/AdminNavigation';

export const GenreEdit: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<IGenreEditInput>({
		mode: 'onChange',
	});

	const { isLoading, onSubmit } = useGenreEdit(setValue);
	return (
		<Meta title="Edit genre">
			<AdminNavigation />
			<Heading title="Edit genre" />
			<form onSubmit={handleSubmit(onSubmit)}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div>
							<Input
								{...register('name', { required: 'Name is required' })}
								placeholder="Name"
								error={errors.name}
								style={{ width: '31%' }}
							/>

							<div style={{ width: '31%' }}>{/* TODD: Slug */}</div>

							<Input
								{...register('name', { required: 'Name is required' })}
								placeholder="Name"
								error={errors.name}
								style={{ width: '31%' }}
							/>

							{/* Text editor draft.js */}

							<button>Update</button>
						</div>
					</>
				)}
			</form>
		</Meta>
	);
};
