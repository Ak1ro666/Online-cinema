import { IGenre } from '@/shared/types/movie.types';
import { IGenreEdit } from '@/pages/genreEdit/types/genre-edit.interface';
import { axiosClassic } from '@/shared/api/interceptors';
import { getGenresUrl } from '@/shared/config/api.config';

export const GenreService = {
	async getPopular() {
		return await axiosClassic.get<IGenre[]>(getGenresUrl());
	},
	async getById(id: number) {
		return await axiosClassic.get<IGenreEdit>(getGenresUrl() + `/${id}`);
	},
	async update(id: number, data: IGenreEdit) {
		return await axiosClassic.patch(getGenresUrl() + `/${id}`, data);
	},
	async delete(id: number) {
		return await axiosClassic.delete(getGenresUrl() + `/${id}`);
	},
};
