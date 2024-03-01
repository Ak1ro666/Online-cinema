import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { useQuery } from 'react-query';

import { getMoviesUrl } from '@/shared/config/api.config';
import { MovieService } from '@/shared/services/movies.service';
import { IMovie } from '@/shared/types/movie.types';
import { SkeletonLoader } from '@/shared/ui/model/SkeletonLoader';
import { SubHeading } from '@/shared/ui/ui/SubHeading';

import styles from './PopularMovie.module.scss';

export const PopularMovie: FC = () => {
	const { data: movie, isLoading } = useQuery({
		queryKey: ['Most popular movie in admin'],
		queryFn: () => MovieService.allMovies(),
		select: ({ data }): IMovie => data.sort((a, b) => b.rating - a.rating)[0],
	});

	return (
		<div className={cn(styles.block, styles.popular)}>
			<SubHeading title="The most popular movie" />

			{isLoading ? (
				<SkeletonLoader className="h-48" />
			) : (
				movie && (
					<>
						<h3>Opened {movie.countOpened} times</h3>
						<Link href={getMoviesUrl() + `/${movie.slug}`}>
							<Image
								width={285}
								height={176}
								className={styles.image}
								src={movie.bigPoster}
								alt={movie.title}
								unoptimized
							/>
						</Link>
					</>
				)
			)}
		</div>
	);
};
