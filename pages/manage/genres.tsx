import { GenresList } from '@/pages/genres';
import { NextAuthPage } from '@/pages/auth/types/auth.types';

const GenreListPage: NextAuthPage = () => {
	return <GenresList />;
};


GenreListPage.isOnlyAdmin = true;
export default GenreListPage;
