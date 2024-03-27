import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';

import { IUserEdit } from '@/pages/userEdit/types/user-edit.interface';
import { UserService } from '@/shared/services/user.service';
import { getStoreLocal } from '@/shared/utils/local-storage';
import { toastr } from 'react-redux-toastr';
import { useRouter } from 'next/router';

export const useProfile = (setValue: UseFormSetValue<IUserEdit>) => {
	const { push } = useRouter();

	const user = getStoreLocal('user') as IUserEdit;

	const { isLoading, refetch } = useQuery({
		queryKey: ['profile/edit', user.id],
		queryFn: () => UserService.getById(user.id),
		onSuccess: ({ data }) => {
			setValue('email', data[0].email);
		},
		onError: error => {
			toastr.error(error as unknown as string, 'Get profile');
		},
	});

	const { mutateAsync } = useMutation({
		mutationKey: 'update profile',
		mutationFn: (data: IUserEdit) => UserService.update(user.id, data),
		onSuccess: () => {
			toastr.success('Update profile', 'update was updated');
			push('/');
		},
		onError: error => {
			toastr.error(error as unknown as string, 'Update profile');
		},
		onSettled: () => {
			refetch();
		},
	});

	const onSubmit: SubmitHandler<IUserEdit> = async data => {
		await mutateAsync(data);
	};

	return { onSubmit, isLoading };
};
