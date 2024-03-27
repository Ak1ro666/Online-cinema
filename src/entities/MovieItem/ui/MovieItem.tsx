import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { getGenreUrl, getOneMovieUrl } from '@/shared/config/url.config';
import { IMovie } from '@/shared/types/movie.types';
import { MaterialIcon } from '@/shared/ui/ui/MaterialIcon';
import { getGenresListEach } from '@/shared/utils/movie/getGenresListEach';

import styles from './MovieItem.module.scss';

export const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {

	return (
		<div className={styles.item}>
			<Link href={getOneMovieUrl(movie.slug)}>
				<Image width={65} height={97} src={movie.poster} priority draggable={false} alt={movie.title} />
			</Link>
			<div className={styles.info}>
				<div>
					<div className={styles.title}>{movie.title}</div>
				</div>
				<div className={styles.genres}>
					{movie.genres.map((genre, index) => (
						<Link key={`${genre.name}`} href={getGenreUrl(genre.slug)}>
							{getGenresListEach(index, movie.genres.length, genre.name)}
						</Link>
					))}
				</div>

				<div className={styles.rating}>
					<MaterialIcon name="MdStarRate" />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	);
};
