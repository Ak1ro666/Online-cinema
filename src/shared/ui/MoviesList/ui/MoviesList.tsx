import Link from 'next/link';
import { FC } from 'react';

import { MovieItem } from '@/shared/ui/MovieItem';
import { IMoviesList } from '@/shared/ui/MoviesList/types/movies-list.interface';

import styles from './MoviesList.module.scss';

export const MoviesList: FC<IMoviesList> = ({ link, title, movies }) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies
				.sort((a, b) => b.rating - a.rating)
				.map(movie => (
					<MovieItem key={movie.videoUrl} movie={movie} />
				))}
			<Link className={styles.button} href={link}>
				See more
			</Link>
		</div>
	);
};
