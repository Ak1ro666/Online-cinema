import { axiosClassic } from '@/shared/api/interceptors';
import { getActorsUrl } from '@/shared/config/api.config';
import { IActor } from '@/shared/types/movie.types';

export const ActorService = {
	async getAll() {
		return axiosClassic.get<IActor[]>(getActorsUrl());
	},
	async delete(id: number) {
		return await axiosClassic.delete(getActorsUrl() + `/${id}`);
	},
};
