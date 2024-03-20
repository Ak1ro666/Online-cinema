import { IMovie } from '@/shared/types/movie.types';

export interface ISliderProps {
	slides: ISlide[]
	buttonTitle?: string
}

export interface ISlide extends Pick<IMovie, 'id' | 'bigPoster' | 'title'> {
	subTitle: string;
	link: string;
}
