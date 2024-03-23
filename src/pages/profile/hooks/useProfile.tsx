import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'

import { IProfileInput } from '@/pages/profile/types/profile.interface'
import { UserService } from '@/shared/services/user.service'
import { getKeys } from '@/shared/utils/object/getKeys'
import { toastr } from 'react-redux-toastr'

export const useProfile = (setValue: UseFormSetValue<IProfileInput>) => {
	const { isLoading, data: user } = useQuery({
		queryKey: ['profile'],
		queryFn: () => UserService.getMyProfile(),
		onSuccess: ({ data }) => {
			getKeys(data).forEach(key => {
				setValue(key, data[key]);
			});
		},
		onError: error => {
			toastr.error(error as unknown as string, 'Get profile');
		},
	});

	const { mutateAsync } = useMutation({
		mutationKey: 'update profile',
		mutationFn: (data: IProfileInput) => UserService.getAll(),
		onSuccess: () => {
			toastr.success('Update user', 'update was updated');
		},
		onError: error => {
			toastr.error(error as unknown as string, 'Update user');
		},
	});

	const onSubmit: SubmitHandler<IProfileInput> = async data => {
		await mutateAsync(data);
	};

	return { onSubmit, isLoading };
}