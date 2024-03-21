import { getMoviesUrl, getPopularMoviesUrl } from '@/shared/config/api.config';

import { IMovie } from '@/shared/types/movie.types';
import { IMovieEdit } from '@/pages/movieEdit/types/movie-edit.interface';
import { axiosClassic } from '@/shared/api/interceptors';
import { getMovieUrl } from '@/shared/config/url.config';

export const MovieService = {
	async getAll() {
		return await axiosClassic.get<IMovie[]>(getMoviesUrl());
	},

	async getByGenres(genreSlug: string) {
		console.log(genreSlug)
		return await axiosClassic.get<IMovie[]>(getMovieUrl(`?genres.name=${genreSlug}`));
	},

	async getByActor(actorId: string) {
		return await axiosClassic.get<IMovie[]>(getMovieUrl(`?actors.id=${actorId}`));
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
