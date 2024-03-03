import { NextAuthPage } from '@/pages/auth/types/auth.types';
import { GenresList } from '@/pages/genres';

const GenreListPage: NextAuthPage = () => {
	return <GenresList />;
};

GenreListPage.isOnlyAdmin = true;
export default GenreListPage;
