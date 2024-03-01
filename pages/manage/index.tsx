import React from 'react';

import { NextAuthPage } from '@/pages/auth/types/auth.types';

const AdminPage: NextAuthPage = () => {
	return <div>AdminPage</div>;
};

AdminPage.isOnlyAdmin = true;

export default AdminPage;
