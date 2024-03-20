import { ISlide } from '@/entities/Slider/types/slider.interface';

export interface ISlideItemProps {
	slide: ISlide;
	buttonTitle?: string;
	sliderIn: boolean;
}
