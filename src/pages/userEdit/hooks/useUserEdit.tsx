import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';

import { IUserEdit } from '@/pages/userEdit/types/user-edit.interface';
import { UserService } from '@/shared/services/user.service';
import { getAdminUrl } from '@/shared/config/url.config';
import { getKeys } from '@/shared/utils/object/getKeys';
import { toastr } from 'react-redux-toastr';
import { useRouter } from 'next/router';

export const useUserEdit = (setValue: UseFormSetValue<IUserEdit>) => {
	const { push, query } = useRouter();

	const userId = Number(query.id);

	const { isLoading } = useQuery({
		queryKey: ['user/edit', userId],
		queryFn: () => UserService.getById(userId),
		enabled: !!query.id,
		onSuccess: ({ data }) => {
			setValue('email', data[0].email);
			setValue('isAdmin', data[0].isAdmin);
		},
		onError: error => {
			toastr.error(error as unknown as string, 'Get user');
		},
	});

	const { mutateAsync } = useMutation({
		mutationKey: 'update user',
		mutationFn: (data: IUserEdit) => UserService.update(userId, data),
		onSuccess: () => {
			toastr.success('Update user', 'update was updated');
			push(getAdminUrl('user'));
		},
		onError: error => {
			toastr.error(error as unknown as string, 'Update actor');
		},
	});

	const onSubmit: SubmitHandler<IUserEdit> = async data => {
		await mutateAsync(data);
	};

	return { onSubmit, isLoading };
};
