import { FC } from 'react';

import { GalleryItem } from '@/shared/ui/model/GalleyItem';

import styles from './Gallery.module.scss';
import { IGalleryItem } from '@/entities/Gallery/types/gallery.interface';

export const Gallery: FC<{ items: IGalleryItem[] }> = ({ items }) => {
	return (
		<div className={styles.gallery}>
			{items.map(item => (
				<GalleryItem key={item.name} item={item} variant="vertical" />
			))}
		</div>
	);
};
