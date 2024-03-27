import { FC } from 'react';
import { PopularMovies } from '@/widgets/PopularMovies';
import dynamic from 'next/dynamic';

const DynamicFavoritesMovies = dynamic(
	() => import('@/shared/ui/model/FavoritesMovies').then(module => module.FavoritesMovies),
	{
		ssr: false,
	},
);

export const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<DynamicFavoritesMovies />
		</div>
	);
};
