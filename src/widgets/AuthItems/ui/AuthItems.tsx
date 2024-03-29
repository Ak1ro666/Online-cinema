import { FC, useEffect, useState } from 'react';

import { getAdminHomeUrl } from '@/shared/config/url.config';
import { useAuth } from '@/shared/hooks/useAuth';
import { MenuItem } from '@/shared/ui/model/MenuItem';

import { LogoutButton } from '@/features/LogoutSystem';

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

			{user && user.isAdmin && <MenuItem icon="MdOutlineLock" link={getAdminHomeUrl()} title="Admin panel" />}
		</>
	);
};
