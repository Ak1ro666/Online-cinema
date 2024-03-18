import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';

import { IMovieEdit } from '@/pages/movieEdit/types/movie-edit.interface';
import { MovieService } from '@/shared/services/movie.service';
import { getAdminUrl } from '@/shared/config/url.config';
import { getKeys } from '@/shared/utils/object/getKeys';
import { toastr } from 'react-redux-toastr';
import { useRouter } from 'next/router';

export const useMovieEdit = (setValue: UseFormSetValue<IMovieEdit>) => {
	const { push, query } = useRouter();

	const movieId = Number(query.id);

	const { isLoading } = useQuery({
		queryKey: ['movie/edit', movieId],
		queryFn: () => MovieService.getById(movieId),
		enabled: !!query.id,
		onSuccess: ({ data }) => {
			getKeys(data).forEach(key => {
				setValue(key, data[key]);
			});
		},
		onError: error => {
			toastr.error(error as unknown as string, 'Get movie');
		},
	});

	const { mutateAsync } = useMutation({
		mutationKey: 'update movie',
		mutationFn: (data: IMovieEdit) => MovieService.update(movieId, data),
		onSuccess: () => {
			toastr.success('Update movie', 'update was updated');
			push(getAdminUrl('movies'));
		},
		onError: error => {
			toastr.error(error as unknown as string, 'Update movie');
		},
	});

	const onSubmit: SubmitHandler<IMovieEdit> = async data => {
		await mutateAsync(data);
	};

	return { onSubmit, isLoading };
};
