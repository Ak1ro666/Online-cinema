import { GalleryItem } from '@/entities/GalleyItem'
import { IGalleryItem } from '@/widgets/Gallery/types/gallery.interface'
import { FC } from 'react'
import styles from './Gallery.module.scss'

export const Gallery: FC<{ items: IGalleryItem[] }> = ({ items }) => {

	return (
		<div className={styles.gallery}>
			{items.map(item => (
				<GalleryItem key={item.name} item={item} variant="vertical" />
			))}
		</div>
	);
};
