import { FC, useEffect } from 'react';

import { ISliderProps } from '../types/slider.interface';
import { SlideArrow } from '@/shared/ui/model/SlideArrow';
import { SlideItem } from '@/shared/ui/model/SlideItem';
import styles from './Slider.module.scss';
import { useSlider } from '@/entities/Slider/hooks/useSlider';

export const Slider: FC<ISliderProps> = ({ slides, buttonTitle }) => {
	const { sliderIn, index, isNext, isPrev, handleClick, setCurrentIndex, setSliderIn } = useSlider(slides.length);

	const nextSlide = () => {
		setSliderIn(false);

		setTimeout(() => {
			setCurrentIndex(prevSlide => (prevSlide + 1) % slides.length);
			setSliderIn(true);
		}, 300);
	};

	useEffect(() => {
		const interval = setInterval(nextSlide, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.slider}>
			<SlideItem sliderIn={sliderIn} slide={slides[index]} buttonTitle={buttonTitle} />

			{isPrev && <SlideArrow variant="left" clickHandler={() => handleClick('prev')} />}

			{isNext && <SlideArrow variant="right" clickHandler={() => handleClick('next')} />}
		</div>
	);
};
