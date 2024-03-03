import { NextAuthPage } from '@/pages/auth/types/auth.types';
import { UsersList } from '@/pages/users'

const UserListPage: NextAuthPage = () => {
	return <UsersList />;
};

UserListPage.isOnlyAdmin = true;
export default UserListPage;
