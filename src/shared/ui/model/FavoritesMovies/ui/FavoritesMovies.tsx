import { useActions } from '@/shared/hooks/useActions';
import { useAuth } from '@/shared/hooks/useAuth';
import { useFavorites } from '@/shared/hooks/useFavorites';
import { MoviesList } from '@/shared/ui/model/MoviesList';
import { NotAuthFavorites } from '@/shared/ui/model/NotAuthFavorites';
import { FC } from 'react';

export const FavoritesMovies: FC = () => {
	const { addItemFavorites, removeItemFavorites } = useActions();
	const { favorites } = useFavorites();
	const { user } = useAuth();

	if (!user) return <NotAuthFavorites />;

	return <MoviesList link="/favorites" title="Favorites" movies={favorites?.slice(0, 3) || []} />;
};
