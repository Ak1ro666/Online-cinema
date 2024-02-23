import { FC } from 'react';
import { Logo } from '@/shared/ui/Logo'
import { MenuContainer } from '@/widgets/MenuContainer'
import styles from './Navigation.module.scss';

export const Navigation: FC = () => {
	return (
		<nav className={styles.navigation}>
			<Logo />
			<MenuContainer />
		</nav>
	);
};

