import React from 'react';

import Meta from '@/shared/utils/meta/Meta';

import type { NextAuthPage } from '@/pages/auth/types/auth.types';

const Profile: NextAuthPage = () => {
	return (
		<Meta title="Profile" description="Online theater profile page">
			<div>Profile</div>
		</Meta>
	);
};

Profile.isOnlyUser = true;

export default Profile;
