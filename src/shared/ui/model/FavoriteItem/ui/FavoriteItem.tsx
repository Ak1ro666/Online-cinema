import { IMovie } from '@/shared/types/movie.types';
import { FC } from 'react';

import styles from './FavoriteItem.module.scss';
import { FavoriteButton } from '@/shared/ui/model/FavoriteButton';
import Image from 'next/image';
import Link from 'next/link';
import { getOneMovieUrl } from '@/shared/config/url.config';

export const FavoriteItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.itemWrapper}>
			<FavoriteButton movie={movie} />
			<Link href={getOneMovieUrl(movie.slug)}>
				<div className={styles.item}>
					<Image layout="fill" src={movie.bigPoster} alt={movie.title} draggable={false} priority />
					<div className={styles.title}>{movie.title}</div>
				</div>
			</Link>
		</div>
	);
};
