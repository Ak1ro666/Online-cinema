import { MovieEdit } from '@/pages/movieEdit'
import { NextAuthPage } from '@/pages/auth/types/auth.types';

const MovieEditPage: NextAuthPage = () => {
	return <MovieEdit />;
};

MovieEditPage.isOnlyAdmin = true;
export default MovieEditPage;
