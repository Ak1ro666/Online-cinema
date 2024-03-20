import { useState } from 'react';

export const useSlider = (length: number) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [sliderIn, setSliderIn] = useState(true);

	const isExistsNext = currentIndex + 1 < length;
	const isExistsPrev = currentIndex - 1 > -1;

	const handleArrowClick = (direction: 'next' | 'prev') => {
		const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
		setSliderIn(false);

		setTimeout(() => {
			setCurrentIndex(newIndex);
			setSliderIn(true);
		}, 300);
	};

	return {
		sliderIn,
		index: currentIndex,
		isNext: isExistsNext,
		isPrev: isExistsPrev,
		handleClick: handleArrowClick,
		setCurrentIndex,
		setSliderIn
	};
};
