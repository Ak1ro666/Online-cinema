import { TypeMaterialIconName } from '@/shared/ui/MaterialIcon';

export interface IParameters {
	year: number;
	duration: number;
	country: string;
}

export interface IActor {
	photo: string;
	name: string;
	countMovies: number;
	link: string;
}

export interface IGenre {
	name: string;
	slug: string;
	description: string;
	icon: TypeMaterialIconName;
}

export interface IMovie {
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
