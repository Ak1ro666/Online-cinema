import cn from 'classnames';
import { FC } from 'react';
import { useQuery } from 'react-query';

import { AdminService } from '@/shared/services/admin.service';
import { SkeletonLoader } from '@/shared/ui/model/SkeletonLoader';

import styles from './CountUser.module.scss';

export const CountUser: FC = () => {
	const { data: countUser, isLoading } = useQuery({
		queryKey: ['count users'],
		queryFn: () => AdminService.getCountUsers(),
	});

	return (
		<div className={cn(styles.block, styles.countUser)}>
			<div>
				{isLoading ? <SkeletonLoader /> : <div className={styles.number}>{countUser}</div>} <div>users</div>
			</div>
		</div>
	);
};
