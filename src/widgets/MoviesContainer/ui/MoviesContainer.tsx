import { FC } from 'react';

import { FavoritesMovies } from '@/shared/ui/FavoritesMovies';
import { PopularMovies } from '@/shared/ui/PopularMovies';

export const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<FavoritesMovies />
		</div>
	);
};
