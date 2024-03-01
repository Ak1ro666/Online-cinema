import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';

import { useAuth } from '@/shared/hooks/useAuth';

import { TypeComponentAuthFields } from '@/pages/auth/types/auth.types';

type CheckRoleProps = TypeComponentAuthFields & {
	children: ReactNode;
};

const CheckRole: FC<CheckRoleProps> = ({ children, Component: { isOnlyAdmin, isOnlyUser } }) => {
	const { user } = useAuth();

	const router = useRouter();
	const Children = () => <>{children}</>;

	if (user?.isAdmin) return <Children />;

	if (isOnlyAdmin) {
		router.pathname !== '/404' && router.replace('/404');
		return null;
	}

	const isUser = user && !user?.isAdmin;

	if (isUser && isOnlyUser) return <Children />;
	else router.pathname !== '/auth' && router.replace('/auth');
	return null;
};

export default CheckRole;
