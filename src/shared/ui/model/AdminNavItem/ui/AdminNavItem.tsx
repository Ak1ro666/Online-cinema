import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { INavItem } from '@/shared/ui/model/AdminNavItem/types/admin-navigation.interface';

import styles from './AdminNavItem.module.scss';

export const AdminNavItem: FC<{ item: INavItem }> = ({ item: { title, link } }) => {
	const { asPath } = useRouter();

	return (
		<li className={styles.navItem}>
			<Link
				href={link}
				className={cn({
					[styles.active]: asPath === link,
				})}
			>
				{title}
			</Link>
		</li>
	);
};
