import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './GalleyItem.module.scss';
import { IGalleryItemProps } from '@/entities/Gallery/types/gallery.interface';

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
			<Image layout="fill" src={item.posterPath} alt={item.name} draggable={false} priority />
			{item.content && (
				<div className={styles.content}>
					<div className={styles.title}>{item.content.title}</div>
					{item.content.subTitle && <div className={styles.subTitle}>{item.content.subTitle}</div>}
				</div>
			)}
		</Link>
	);
};
