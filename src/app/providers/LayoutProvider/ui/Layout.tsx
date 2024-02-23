import { FC, ReactNode } from 'react';

import { Navigation } from '@/widgets/Navigation';
import { Sidebar } from '@/widgets/Sidebar';
import styles from './Layout.module.scss';

interface ILayoutProps {
	children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
			<Sidebar />
		</div>
	);
};
