import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';

import { ActorService } from '@/shared/services/actor.service';
import { IActorEdit } from '@/pages/actorEdit/types/actor-edit.interface';
import { getAdminUrl } from '@/shared/config/url.config';
import { getKeys } from '@/shared/utils/object/getKeys';
import { toastr } from 'react-redux-toastr';
import { useRouter } from 'next/router';

export const useActorEdit = (setValue: UseFormSetValue<IActorEdit>) => {
	const { push, query } = useRouter();

	const actorId = Number(query.id);

	const { isLoading } = useQuery({
		queryKey: ['actor/edit', actorId],
		queryFn: () => ActorService.getById(actorId),
		enabled: !!query.id,
		onSuccess: ({ data }) => {
			getKeys(data).forEach(key => {
				setValue(key, data[key]);
			});
		},
		onError: error => {
			toastr.error(error as unknown as string, 'Get genre');
		},
	});

	const { mutateAsync } = useMutation({
		mutationKey: 'update actor',
		mutationFn: (data: IActorEdit) => ActorService.update(actorId, data),
		onSuccess: () => {
			toastr.success('Update actor', 'update was updated');
			push(getAdminUrl('actors'));
		},
		onError: error => {
			toastr.error(error as unknown as string, 'Update actor');
		},
	});

	const onSubmit: SubmitHandler<IActorEdit> = async data => {
		await mutateAsync(data);
	};

	return { onSubmit, isLoading };
};
