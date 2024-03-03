import { FC } from 'react';

import { Heading } from '@/shared/ui/ui/Heading';
import Meta from '@/shared/utils/meta/Meta';

import { AdminNavigation } from '@/widgets/AdminNavigation/ui/AdminNavigation';
import { Statistics } from '@/widgets/Statistics';

export const Admin: FC = () => {
	return (
		<Meta title="Admin panel">
			<AdminNavigation />
			<Heading title="Some statistics" />
			<Statistics />
		</Meta>
	);
};
