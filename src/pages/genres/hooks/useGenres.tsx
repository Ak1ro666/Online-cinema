import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import useDebounce from '@/shared/hooks/useDebounce';
import { GenreService } from '@/shared/services/genre.service';

import { ITableItem } from '../../../shared/types/admin-table.types';

export const useGenres = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const debouncedSearch = useDebounce(searchTerm, 500);

	const queryData = useQuery({
		queryKey: ['genre list', debouncedSearch],
		queryFn: () => GenreService.getPopular(),
		select: ({ data }) =>
			data
				.map(
					(genre): ITableItem => ({
						id: genre.id,
						editUrl: `/genre/edit/${genre.id}`,
						items: [genre.name, genre.slug],
					}),
				)
				.filter(
					genre =>
						genre.items &&
						genre.items[0]
							.toLowerCase()
							.replace(/\s+/g, '')
							.includes(debouncedSearch.toLowerCase().replace(/\s+/g, '')),
				),
		onError: error => {
			toastr.error(error as unknown as string, 'Genre list');
		},
	});

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['delete genre'],
		mutationFn: (userId: number) => GenreService.delete(userId),
		onError: error => {
			toastr.error(error as unknown as string, 'Genre list');
		},
		onSuccess: () => {
			toastr.success('Delete genre', 'delete was successful');
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
