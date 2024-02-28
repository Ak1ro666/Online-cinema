import cn from 'classnames';
import { FC } from 'react';
import Skeleton, { SkeletonProps } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
	return <Skeleton {...rest} baseColor="#1f2125" highlightColor="#292a2e" className={cn('rounded-lg', className)} />;
};
