import Meta from '@/shared/utils/meta/Meta';
import type { NextAuthPage } from '@/pages/auth/types/auth.types';
import { Profile } from '@/pages/profile'
import React from 'react';

const ProfilePage: NextAuthPage = () => {
	return (
		<Meta title="Profile" description="Online theater profile page">
			<Profile />
		</Meta>
	);
};

ProfilePage.isOnlyUser = true;

export default ProfilePage;
