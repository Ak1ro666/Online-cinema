import { axiosClassic } from '@/shared/api/interceptors';
import { getGenresUrl } from '@/shared/config/api.config';
import { IGenre } from '@/shared/types/movie.types';

import { IGenreEditInput } from '@/pages/genreEdit/types/genre-edit.interface';

export const GenreService = {
	async getPopular() {
		return axiosClassic.get<IGenre[]>(getGenresUrl());
	},
	async getById(id: number) {
		return axiosClassic.get<IGenreEditInput>(getGenresUrl() + `/${id}`);
	},
	async update(id: number, data: IGenreEditInput) {
		return await axiosClassic.patch(getGenresUrl() + `/${id}`, data);
	},
	async delete(id: number) {
		return await axiosClassic.delete(getGenresUrl() + `/${id}`);
	},
};
