import cn from 'classnames';
import { FC } from 'react';
import { useQuery } from 'react-query';

import { UserService } from '@/shared/services/user.service';
import { SkeletonLoader } from '@/shared/ui/ui/SkeletonLoader';

import styles from './CountUser.module.scss';

export const CountUser: FC = () => {
	const { data: countUser, isLoading } = useQuery({
		queryKey: ['count users'],
		queryFn: () => UserService.getAll(),
		select: ({ data }) => data.length,
	});

	return (
		<div className={cn(styles.block, styles.countUser)}>
			<div>
				{isLoading ? <SkeletonLoader height={50} /> : <div className={styles.number}>{countUser}</div>} <div>users</div>
			</div>
		</div>
	);
};
