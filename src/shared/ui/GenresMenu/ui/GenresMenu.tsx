import { FC } from 'react';
import { Menu } from '@/shared/ui/Menu';
import { usePopularGenres } from '../hooks/usePopularGenres';

export const GenresMenu: FC = () => {
	const { isLoading, data } = usePopularGenres();
	return isLoading ? <div className="mx-11 mb-6">Loading...</div> : <Menu title="Popular genres" items={data || []} />;
};
