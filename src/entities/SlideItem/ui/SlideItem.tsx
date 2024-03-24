import { FC } from 'react';
import { ISlideItemProps } from '@/entities/SlideItem/types/slide-item.interface'
import Image from 'next/image';
import cn from 'classnames';
import styles from './SlideItem.module.scss';
import { useRouter } from 'next/router';

export const SlideItem: FC<ISlideItemProps> = ({ slide, buttonTitle = 'Watch', sliderIn = false }) => {
	const { push } = useRouter();

	return (
		<div
			className={cn(styles.slide, {
				[styles.sliderIn]: sliderIn,
			})}
		>
			{slide.bigPoster && (
				<Image
					width={351}
					height={320}
					style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
					className={styles.image}
					src={slide.bigPoster}
					alt={slide.title}
					draggable={false}
					unoptimized
					priority
				/>
			)}

			<div className={styles.content}>
				<div className={styles.heading}>{slide.title}</div>
				<div className={styles.subHeading}>{slide.subTitle}</div>
				<button className={styles.button} onClick={() => push(slide.link)}>
					{buttonTitle}
				</button>
			</div>
		</div>
	);
};
