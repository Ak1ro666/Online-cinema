import { axiosClassic } from '@/shared/api/interceptors';
import { getMoviesUrl, getPopularMoviesUrl } from '@/shared/config/api.config';
import { IMovie } from '@/shared/types/movie.types';

export const MovieService = {
	async getAll() {
		return await axiosClassic.get<IMovie[]>(getMoviesUrl());
	},

	async getMostPopularMovies() {
		return await axiosClassic.get<IMovie[]>(getPopularMoviesUrl());
	},

	async delete(id: number) {
		return await axiosClassic.delete(getMoviesUrl() + `/${id}`);
	},
};
