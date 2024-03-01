import React from 'react';

import { Admin } from '@/pages/admin';
import { NextAuthPage } from '@/pages/auth/types/auth.types';

const AdminPage: NextAuthPage = () => {
	return <Admin />;
};

AdminPage.isOnlyAdmin = true;

export default AdminPage;
