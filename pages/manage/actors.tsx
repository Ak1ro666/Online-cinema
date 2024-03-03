import { ActorsList } from '@/pages/actors';
import { NextAuthPage } from '@/pages/auth/types/auth.types';

const ActorsListPage: NextAuthPage = () => {
	return <ActorsList />;
};

ActorsListPage.isOnlyAdmin = true;
export default ActorsListPage;
