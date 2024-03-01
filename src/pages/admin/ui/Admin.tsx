import { FC } from 'react';

import { Statistics } from '@/shared/ui/model/Statistics';
import { Heading } from '@/shared/ui/ui/Heading';
import Meta from '@/shared/utils/meta/Meta';

import styles from './Admin.module.scss';
import { AdminNavigation } from '@/widgets/AdminNavigation/ui/AdminNavigation';

export const Admin: FC = () => {
	return (
		<Meta title="Admin panel">
			<AdminNavigation />
			<Heading title="Some statistics" />
			<Statistics />
		</Meta>
	);
};
