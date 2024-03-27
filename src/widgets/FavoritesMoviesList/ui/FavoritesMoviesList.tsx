import { FC } from 'react';

import styles from './FavoritesMoviesList.module.scss';
import { IMoviesList } from '@/shared/ui/model/MoviesList/types/movies-list.interface';
import Link from 'next/link';
import { MovieItem } from '@/entities/MovieItem';

export const FavoritesMoviesList: FC<IMoviesList> = ({ link, title, movies }) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies.map(movie => (
				<MovieItem key={movie.videoUrl} movie={movie} />
			))}
			<Link className={styles.button} href={link}>
				See more
			</Link>
		</div>
	);
};
