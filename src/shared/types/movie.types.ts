import { TypeMaterialIconName } from '@/shared/ui/ui/MaterialIcon';

export interface IParameters {
	year: number;
	duration: number;
	country: string;
}

export interface IActor {
	id: number;
	photo: string;
	name: string;
	countMovies: number;
	slug: string;
}

export interface IGenre {
	id: number;
	name: string;
	slug: string;
	description: string;
	icon: TypeMaterialIconName;
}

export interface IMovie {
	id: number;
	poster: string;
	bigPoster: string;
	title: string;
	parameters: IParameters;
	genres: IGenre[];
	actors: IActor[];
	countOpened: number;
	videoUrl: string;
	rating: number;
	slug: string;
}
