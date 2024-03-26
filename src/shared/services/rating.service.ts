import { getMoviesUrl } from '@/shared/config/api.config';

import { axiosClassic } from '@/shared/api/interceptors';
import { IMovie } from '@/shared/types/movie.types';

export const RatingService = {
	async setRating(movieId: number, value: number) {
		return await axiosClassic.patch(getMoviesUrl(`/${movieId}`), {
			rating: value
		});
	},

	async getByUserMovie(movieId: number) {
		return await axiosClassic.get<IMovie[]>(getMoviesUrl(`?id=${movieId}`));
	},
};
