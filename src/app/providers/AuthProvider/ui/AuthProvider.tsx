import { FC, ReactNode, useEffect } from 'react';

import { ACCESS_TOKEN } from '@/shared/config/auth.config';
import { TypeComponentAuthFields } from '@/pages/auth/types/auth.types';
import dynamic from 'next/dynamic';
import { getStoreLocal } from '@/shared/utils/local-storage';
import { useActions } from '@/shared/hooks/useActions';
import { useAuth } from '@/shared/hooks/useAuth';
import { useRouter } from 'next/router';

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {
	ssr: false,
});

export type AuthProviderProps = TypeComponentAuthFields & {
	children: ReactNode;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children, Component: { isOnlyAdmin, isOnlyUser } }) => {
	const { user } = useAuth();
	const { logout } = useActions();
	const Children = () => <>{children}</>;

	const { pathname } = useRouter();

	useEffect(() => {
		const accessToken = getStoreLocal(ACCESS_TOKEN);
		if (!accessToken && user) logout();
	}, [pathname]);

	return !isOnlyAdmin && !isOnlyUser ? (
		<Children />
	) : (
		<DynamicCheckRole Component={{ isOnlyAdmin, isOnlyUser }}>{children}</DynamicCheckRole>
	);
};
