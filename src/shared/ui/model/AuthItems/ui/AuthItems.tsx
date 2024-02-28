import { FC } from 'react';

import { getAdminHomeUrl } from '@/shared/config/url.config';
import { useAuth } from '@/shared/hooks/useAuth';
import { LogoutButton } from '@/shared/ui/model/LogoutButton';
import { MenuItem } from '@/shared/ui/model/MenuItem';

export const AuthItems: FC = () => {
	const { user } = useAuth();

	return (
		<>
			{user ? (
				<>
					<MenuItem icon="MdSettings" link="/profile" title="Profile" />
					<LogoutButton />
				</>
			) : (
				<MenuItem icon="MdLogin" link="/auth" title="Login" />
			)}

			{user?.isAdmin && <MenuItem icon="MdOutlineLock" link={getAdminHomeUrl()} title="Admin panel" />}
		</>
	);
};
