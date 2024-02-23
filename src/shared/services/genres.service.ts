import { IGenre } from '@/shared/types/movie.types'
import { axiosClassic } from '@/shared/api/interceptors'
import { getPopularGenresUrl } from '@/shared/config/api.config'

export const genresService = {
	async getPopularGenres() {
		return axiosClassic.get<IGenre[]>(getPopularGenresUrl());
	},
};
