import { FC } from 'react';

import { FavoritesMovies } from '@/shared/ui/model/FavoritesMovies';
import { PopularMovies } from '@/shared/ui/model/PopularMovies';

export const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<FavoritesMovies />
		</div>
	);
};
