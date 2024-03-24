import { FC } from 'react';
import { IGalleryItemProps } from '@/widgets/Gallery/types/gallery.interface';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import styles from './GalleyItem.module.scss';

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
