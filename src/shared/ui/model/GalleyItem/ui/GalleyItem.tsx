import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './GalleyItem.module.scss';
import { IGalleryItemProps } from '@/entities/gallery/types/gallery.interface';

export const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => {
	return (
		<Link
			className={cn(styles.item, {
				[styles.withText]: item.content,
				[styles.horizontal]: variant === 'horizontal',
				[styles.vertical]: variant === 'vertical',
			})}
			href={item.link}
		>
			<Image
				src={item.posterPath}
				alt={item.name}
				width={190}
				height={280}
				style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
				draggable={false}
				priority
			/>
			{item.content && (
				<div className={styles.content}>
					<div className={styles.title}>{item.content.title}</div>
					{item.content.subTitle && <div className={styles.subTitle}>{item.content.subTitle}</div>}
				</div>
			)}
		</Link>
	);
};
