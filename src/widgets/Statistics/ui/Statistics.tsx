import { FC } from 'react';

import { CountUser } from '@/shared/ui/model/CountUser';
import { PopularMovie } from '@/shared/ui/model/PopularMovie';

import styles from './Statistics.module.scss';

export const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			<CountUser />
			<PopularMovie />
		</div>
	);
};
