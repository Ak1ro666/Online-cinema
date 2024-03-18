import { ActorEdit } from '@/pages/actorEdit'
import { NextAuthPage } from '@/pages/auth/types/auth.types';

const ActorEditPage: NextAuthPage = () => {
	return <ActorEdit />;
};

ActorEditPage.isOnlyAdmin = true;
export default ActorEditPage;
