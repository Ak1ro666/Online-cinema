import cn from 'classnames';
import { FC } from 'react';

import { MaterialIcon } from '@/shared/ui/ui/MaterialIcon';

import { ISlideArrowProps } from '../types/slider-arrow.interface';

import styles from './SlideArrow.module.scss';

export const SlideArrow: FC<ISlideArrowProps> = ({ variant, clickHandler }) => {
	const isLeft = variant === 'left';

	return (
		<button
			onClick={clickHandler}
			className={cn(styles.arrow, {
				[styles.left]: isLeft,
				[styles.right]: !isLeft,
			})}
		>
			<MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
		</button>
	);
};
