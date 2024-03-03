import { NextAuthPage } from '@/pages/auth/types/auth.types';
import { MoviesList } from '@/pages/movies';

const MovieListPage: NextAuthPage = () => {
	return <MoviesList />;
};

MovieListPage.isOnlyAdmin = true;
export default MovieListPage;
