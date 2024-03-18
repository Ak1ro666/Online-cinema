import { IMovie } from '@/shared/types/movie.types';

export interface IMovieEdit extends Omit<IMovie, 'id'> {}
