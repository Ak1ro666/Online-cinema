import { IMovie } from '@/shared/types/movie.types';
import { FC } from 'react';

import styles from './FavoriteItem.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { getOneMovieUrl } from '@/shared/config/url.config';
import { useAuth } from '@/shared/hooks/useAuth'
import dynamic from 'next/dynamic'

const DynamicFavoriteButton = dynamic(() => import('@/shared/ui/model/FavoriteButton').then(module => module.FavoriteButton), {
	ssr: false
})

export const FavoriteItem: FC<{ movie: IMovie }> = ({ movie }) => {
	
	const { user } = useAuth()

	return (
		<div className={styles.itemWrapper}>
			{user && <DynamicFavoriteButton movie={movie} />}
			<Link href={getOneMovieUrl(movie.slug)}>
				<div className={styles.item}>
					<Image layout="fill" src={movie.bigPoster} alt={movie.title} draggable={false} priority />
					<div className={styles.title}>{movie.title}</div>
				</div>
			</Link>
		</div>
	);
};
