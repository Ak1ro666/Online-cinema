import { NextAuthPage } from '@/pages/auth/types/auth.types';
import { Favorites } from '@/pages/favorites';

const FavoritesPage: NextAuthPage = () => {
	return <Favorites />;
};

FavoritesPage.isOnlyUser = true;

export default FavoritesPage;
