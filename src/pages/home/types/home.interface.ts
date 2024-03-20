import { IGalleryItem } from '@/entities/gallery/types/gallery.interface';
import { ISlide } from '@/entities/Slider/types/slider.interface';

export interface IHome {
	slides: ISlide[];
	trendingMovies: IGalleryItem[];
	actors: IGalleryItem[];
}
