import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import useDebounce from '@/shared/hooks/useDebounce';
import { MovieService } from '@/shared/services/movie.service';
import { ITableItem } from '@/shared/types/admin-table.types';
import { getGenresList } from '@/shared/utils/movie/getGenresListEach';

export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const debouncedSearch = useDebounce(searchTerm, 500);

	const queryData = useQuery({
		queryKey: ['movie list', debouncedSearch],
		queryFn: () => MovieService.getAll(),
		select: ({ data }) =>
			data
				.map(
					(movie): ITableItem => ({
						id: movie.id,
						editUrl: `/manage/movie/edit/${movie.id}`,
						items: [movie.title, getGenresList(movie.genres), String(movie.rating)],
					}),
				)
				.filter(
					movie =>
						movie.items &&
						movie.items[0]
							.toLowerCase()
							.replace(/\s+/g, '')
							.includes(debouncedSearch.toLowerCase().replace(/\s+/g, '')),
				),

		onError: error => {
			toastr.error(error as unknown as string, 'Movie list');
		},
	});

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['delete movie'],
		mutationFn: (userId: number) => MovieService.delete(userId),
		onError: error => {
			toastr.error(error as unknown as string, 'Movie list');
		},
		onSuccess: () => {
			toastr.success('Delete movie', 'delete was successful');
			queryData.refetch();
		},
	});

	return useMemo(
		() => ({
			...queryData,
			handleSearch,
			searchTerm,
			deleteAsync,
		}),
		[deleteAsync, queryData, searchTerm],
	);
};
