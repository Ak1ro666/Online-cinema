import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

import { ActorService } from '@/shared/services/actor.service';
import { ITableItem } from '../../../shared/types/admin-table.types';
import { toastr } from 'react-redux-toastr';
import useDebounce from '@/shared/hooks/useDebounce';

export const useActors = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const debouncedSearch = useDebounce(searchTerm, 500);

	const queryData = useQuery({
		queryKey: ['actors list', debouncedSearch],
		queryFn: () => ActorService.getAll(),
		select: ({ data }) =>
			data
				.map(
					(actor): ITableItem => ({
						id: actor.id,
						editUrl: `/manage/actor/edit/${actor.id}`,
						items: [actor.name, String(actor.countMovies)],
					}),
				)
				.filter(
					actor =>
						actor.items &&
						actor.items[0]
							.toLowerCase()
							.replace(/\s+/g, '')
							.includes(debouncedSearch.toLowerCase().replace(/\s+/g, '')),
				),
		onError: error => {
			toastr.error(error as unknown as string, 'Actor list');
		},
	});

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['delete actor'],
		mutationFn: (userId: number) => ActorService.delete(userId),
		onError: error => {
			toastr.error(error as unknown as string, 'Actor list');
		},
		onSuccess: () => {
			toastr.success('Delete actor', 'delete was successful');
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
