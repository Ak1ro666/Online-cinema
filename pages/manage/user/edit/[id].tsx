import { NextAuthPage } from '@/pages/auth/types/auth.types';
import { UserEdit } from '@/pages/userEdit';

const GenreEditPage: NextAuthPage = () => {
	return <UserEdit />;
};

GenreEditPage.isOnlyAdmin = true;
export default GenreEditPage;
