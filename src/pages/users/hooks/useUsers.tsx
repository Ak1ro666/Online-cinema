import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import useDebounce from '@/shared/hooks/useDebounce';
import { UserService } from '@/shared/services/user.service';

import { ITableItem } from '../../../shared/types/admin-table.types';

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const debouncedSearch = useDebounce(searchTerm, 500);

	const queryData = useQuery({
		queryKey: ['user list', debouncedSearch],
		queryFn: () => UserService.getAll(),
		select: ({ data }) =>
			data
				.map((user): ITableItem => ({ id: user.id, editUrl: `/manage/user/edit/${user.id}`, email: user.email }))
				.filter(
					user =>
						user.email &&
						user.email.toLowerCase().replace(/\s+/g, '').includes(debouncedSearch.toLowerCase().replace(/\s+/g, '')),
				),
		onError: error => {
			toastr.error(error as unknown as string, 'User list');
		},
	});

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['delete user'],
		mutationFn: (userId: number) => UserService.delete(userId),
		onError: error => {
			toastr.error(error as unknown as string, 'User list');
		},
		onSuccess: () => {
			toastr.success('Delete user', 'delete was successful');
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
