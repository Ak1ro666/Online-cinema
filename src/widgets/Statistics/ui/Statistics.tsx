import { CountUser } from '@/shared/ui/model/CountUser';
import { FC } from 'react';
import { PopularMovie } from '@/entities/PopularMovie';
import styles from './Statistics.module.scss';

export const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			<CountUser />
			<PopularMovie />
		</div>
	);
};
