import { getMoviesUrl, getPopularMoviesUrl } from '@/shared/config/api.config';

import { IMovie } from '@/shared/types/movie.types';
import { IMovieEdit } from '@/pages/movieEdit/types/movie-edit.interface';
import { axiosClassic } from '@/shared/api/interceptors';

export const MovieService = {
	async getAll() {
		return await axiosClassic.get<IMovie[]>(getMoviesUrl());
	},

	async getByGenres(genreSlug: string) {
		return await axiosClassic.get<IMovie[]>(getMoviesUrl(`?genres.name=${genreSlug}`));
	},

	async getByActor(actorName: string) {
		console.log(actorName)
		return await axiosClassic.get<IMovie[]>(getMoviesUrl(`?actors.name=${actorName}`));
	},

	async getMostPopularMovies() {
		return await axiosClassic.get<IMovie[]>(getPopularMoviesUrl());
	},

	async getById(id: number) {
		return await axiosClassic.get<IMovieEdit>(getMoviesUrl(`/${id}`));
	},

	async update(id: number, data: IMovieEdit) {
		return await axiosClassic.patch(getMoviesUrl(`/${id}`), data);
	},

	async delete(id: number) {
		return await axiosClassic.delete(getMoviesUrl(`/${id}`));
	},
};
