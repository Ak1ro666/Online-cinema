import React from 'react';

import type { NextAuthPage } from '@/pages/auth/types/auth.types';

const Profile: NextAuthPage = () => {
	return <div>Profile</div>;
};

Profile.isOnlyUser = true;

export default Profile;
