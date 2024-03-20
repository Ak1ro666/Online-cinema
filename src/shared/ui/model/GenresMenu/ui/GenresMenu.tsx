import { FC } from 'react';

import { usePopularGenres } from '@/shared/ui/model/GenresMenu';
import { Menu } from '@/shared/ui/model/Menu';
import { SkeletonLoader } from '@/shared/ui/ui/SkeletonLoader';

export const GenresMenu: FC = () => {
	const { isLoading, data } = usePopularGenres();
	return isLoading ? (
		<div className="mx-11 mb-6">
			<SkeletonLoader className="h-7 mt-6" count={5} />
		</div>
	) : (
		<Menu title="Popular genres" items={data || []} />
	);
};
