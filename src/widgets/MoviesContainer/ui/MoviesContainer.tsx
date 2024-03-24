import { FC } from 'react';
import { FavoritesMovies } from '@/shared/ui/model/FavoritesMovies';
import { PopularMovies } from '@/widgets/PopularMovies';

export const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<FavoritesMovies />
		</div>
	);
};
