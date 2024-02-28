import { IMovie } from '@/shared/types/movie.types';

export interface IMoviesList {
	title: string;
	link: string;
	movies: IMovie[];
}
