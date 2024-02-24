import { FC } from 'react';

import styles from './Sidebar.module.scss';
import { MoviesContainer } from '@/widgets/MoviesContainer';
import { Search } from '@/widgets/Search';

export const Sidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			<Search />
			<MoviesContainer />
		</aside>
	);
};
