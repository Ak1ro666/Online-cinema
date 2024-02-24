import { axiosClassic } from '@/shared/api/interceptors';
import { getMoviesUrl } from '@/shared/config/api.config';
import { IMovie } from '@/shared/types/movie.types';

export const MovieService = {
	async allMovies() {
		return await axiosClassic.get<IMovie[]>(getMoviesUrl());
	},

	async getMostPopularMovies() {
		return await axiosClassic.get<IMovie[]>('/most-popular');
	},
};
