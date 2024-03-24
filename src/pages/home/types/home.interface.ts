import { IGalleryItem } from '@/widgets/Gallery/types/gallery.interface'
import { ISlide } from '@/widgets/Slider/types/slider.interface'

export interface IHome {
	slides: ISlide[];
	trendingMovies: IGalleryItem[];
	actors: IGalleryItem[];
}
