import { getMoviesUrl, getPopularMoviesUrl } from '@/shared/config/api.config';

import { IMovie } from '@/shared/types/movie.types';
import { IMovieEdit } from '@/pages/movieEdit/types/movie-edit.interface'
import { axiosClassic } from '@/shared/api/interceptors';

export const MovieService = {
	async getAll() {
		return await axiosClassic.get<IMovie[]>(getMoviesUrl());
	},

	async getMostPopularMovies() {
		return await axiosClassic.get<IMovie[]>(getPopularMoviesUrl());
	},

	async getById(id: number) {
		return await axiosClassic.get<IMovieEdit>(getMoviesUrl() + `/${id}`);
	},
	
	async update(id: number, data: IMovieEdit) {
		return await axiosClassic.patch(getMoviesUrl() + `/${id}`, data);
	},

	async delete(id: number) {
		return await axiosClassic.delete(getMoviesUrl() + `/${id}`);
	},
};
