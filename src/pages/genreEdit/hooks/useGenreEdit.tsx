import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';

import { GenreService } from '@/shared/services/genre.service';
import { IGenreEdit } from '@/pages/genreEdit/types/genre-edit.interface';
import { getAdminUrl } from '@/shared/config/url.config';
import { getKeys } from '@/shared/utils/object/getKeys';
import { toastr } from 'react-redux-toastr';
import { useRouter } from 'next/router';

export const useGenreEdit = (setValue: UseFormSetValue<IGenreEdit>) => {
	const { push, query } = useRouter();

	const genreId = Number(query.id);

	const { isLoading } = useQuery({
		queryKey: ['genre/edit', genreId],
		queryFn: () => GenreService.getById(genreId),
		enabled: !!query.id,
		onSuccess: ({ data }) => {
			getKeys(data).forEach(key => {
				if (typeof key == 'string') setValue(key, data[key]);
			});
		},
		onError: error => {
			toastr.error(error as unknown as string, 'Get genre');
		},
	});

	const { mutateAsync } = useMutation({
		mutationKey: 'update genre',
		mutationFn: (data: IGenreEdit) => GenreService.update(genreId, data),
		onSuccess: () => {
			toastr.success('Update genre', 'update was updated');
			push(getAdminUrl('genres'));
		},
		onError: error => {
			toastr.error(error as unknown as string, 'Update genre');
		},
	});

	const onSubmit: SubmitHandler<IGenreEdit> = async data => {
		await mutateAsync(data);
	};

	return { onSubmit, isLoading };
};
