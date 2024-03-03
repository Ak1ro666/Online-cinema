import { FC } from 'react';
import { useQuery } from 'react-query';

import { MovieService } from '@/shared/services/movie.service';
import { MoviesList } from '@/shared/ui/model/MoviesList';
import { SkeletonLoader } from '@/shared/ui/ui/SkeletonLoader';

export const PopularMovies: FC = () => {
	const { isLoading, data: popularMovies } = useQuery({
		queryKey: ['popular movies in sidebar'],
		queryFn: () => MovieService.getMostPopularMovies(),
		select: ({ data: movies }) => movies,
	});

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MoviesList link="/trending" movies={popularMovies || []} title="Popular movies" />
	);
};
