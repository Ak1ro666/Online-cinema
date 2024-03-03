import { axiosClassic } from '@/shared/api/interceptors';
import { getGenresUrl } from '@/shared/config/api.config';
import { IGenre } from '@/shared/types/movie.types';

export const GenreService = {
	async getPopular() {
		return axiosClassic.get<IGenre[]>(getGenresUrl());
	},
	async delete(id: number) {
		return await axiosClassic.delete(getGenresUrl() + `/${id}`);
	},
};
