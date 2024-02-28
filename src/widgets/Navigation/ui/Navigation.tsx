import { FC } from 'react';

import { Logo } from '@/shared/ui/ui/Logo';

import styles from './Navigation.module.scss';
import { MenuContainer } from '@/widgets/MenuContainer';

export const Navigation: FC = () => {
	return (
		<nav className={styles.navigation}>
			<Logo />
			<MenuContainer />
		</nav>
	);
};
