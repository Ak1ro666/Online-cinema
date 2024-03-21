import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { getMovieUrl } from '@/shared/config/url.config';
import { IMovie } from '@/shared/types/movie.types';

import styles from './SearchList.module.scss';

export const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => (
	<div className={styles.list}>
		{movies.length ? (
			movies.map(movie => (
				<Link key={movie.slug} href={getMovieUrl(movie.slug)}>
					<Image
						src={movie.poster}
						width={50}
						height={50}
						draggable={false}
						objectFit="cover"
						objectPosition="top"
						alt={movie.title}
					/>
					<span>{movie.title}</span>
				</Link>
			))
		) : (
			<div className="text-white text-center my-4">Movies not found!</div>
		)}
	</div>
);
