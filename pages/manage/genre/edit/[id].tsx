import { NextAuthPage } from '@/pages/auth/types/auth.types';
import { GenreEdit } from '@/pages/genreEdit';

const GenreEditPage: NextAuthPage = () => {
	return <GenreEdit />;
};

GenreEditPage.isOnlyAdmin = true;
export default GenreEditPage;
