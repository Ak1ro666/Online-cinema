import { useAuth } from '@/shared/hooks/useAuth';
import { useFavorites } from '@/shared/hooks/useFavorites';
import { NotAuthFavorites } from '@/shared/ui/model/NotAuthFavorites';
import { FavoritesMoviesList } from '@/widgets/FavoritesMoviesList'
import { FC } from 'react';

export const FavoritesMovies: FC = () => {
	const { favorites } = useFavorites();
	const { user } = useAuth();

	if (!user) return <NotAuthFavorites />;

	return <FavoritesMoviesList link="/favorites" title="Favorites" movies={favorites?.slice(0, 3) || []} />;
};
