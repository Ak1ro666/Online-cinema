import { IActor } from '@/shared/types/movie.types';
import { IActorEdit } from '@/pages/actorEdit/types/actor-edit.interface';
import { axiosClassic } from '@/shared/api/interceptors';
import { getActorsUrl } from '@/shared/config/api.config';

export const ActorService = {
	async getAll() {
		return axiosClassic.get<IActor[]>(getActorsUrl());
	},
	async getById(id: number) {
		return await axiosClassic.get<IActorEdit>(getActorsUrl() + `/${id}`);
	},
	async update(id: number, data: IActorEdit) {
		return await axiosClassic.patch(getActorsUrl() + `/${id}`, data);
	},
	async delete(id: number) {
		return await axiosClassic.delete(getActorsUrl() + `/${id}`);
	},
};
