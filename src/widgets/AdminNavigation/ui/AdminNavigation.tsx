import { FC } from 'react';

import { AdminNavItem } from '@/shared/ui/model/AdminNavItem';
import { navItems } from '@/shared/ui/model/AdminNavItem/model/admin-navigation.data';

import styles from './AdminNavigation.module.scss';

export const AdminNavigation: FC = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				{navItems.map(item => (
					<AdminNavItem key={item.link} item={item} />
				))}
			</ul>
		</nav>
	);
};
