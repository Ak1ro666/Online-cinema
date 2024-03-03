import { NextAuthPage } from '@/pages/auth/types/auth.types';
import { Users } from '@/pages/users';

const UserListPage: NextAuthPage = () => {
	return <Users />;
};

UserListPage.isOnlyAdmin = true;
export default UserListPage;
