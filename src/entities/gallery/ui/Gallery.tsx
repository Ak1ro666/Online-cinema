import { FC } from 'react';
import { GalleryItem } from '@/shared/ui/model/GalleyItem';
import { IGalleryItem } from '@/entities/gallery/types/gallery.interface';
import styles from './Gallery.module.scss';

export const Gallery: FC<{ items: IGalleryItem[] }> = ({ items }) => {
	return (
		<div className={styles.gallery}>
			{items.map(item => (
				<GalleryItem key={item.name} item={item} variant="vertical" />
			))}
		</div>
	);
};
