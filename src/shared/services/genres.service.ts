import { axiosClassic } from '@/shared/api/interceptors';
import { getPopularGenresUrl } from '@/shared/config/api.config';
import { IGenre } from '@/shared/types/movie.types';

export const GenresService = {
	async getPopularGenres() {
		return axiosClassic.get<IGenre[]>(getPopularGenresUrl());
	},
};
