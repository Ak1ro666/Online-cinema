import { FC } from 'react';

import styles from './Sidebar.module.scss';
import { Search } from '@/entities/Search/ui/Search';
import { MoviesContainer } from '@/widgets/MoviesContainer';

export const Sidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			<Search />
			<MoviesContainer />
		</aside>
	);
};
