import { IGalleryItem } from '@/entities/Gallery/types/gallery.interface';
import { ISlide } from '@/entities/Slider/types/slider.interface';

export interface IHome {
	slides: ISlide[];
	trendingMovies: IGalleryItem[];
	actors: IGalleryItem[];
}
