import { AdminHeader } from '@/shared/ui/model/AdminHeader';
import { AdminNavigation } from '@/widgets/AdminNavigation';
import { AdminTable } from '@/widgets/AdminTable';
import { FC } from 'react';
import { Heading } from '@/shared/ui/ui/Heading';
import { ITableItem } from '@/shared/types/admin-table.types';
import Meta from '@/shared/utils/meta/Meta';
import { SkeletonLoader } from '@/shared/ui/ui/SkeletonLoader';
import { useMovies } from '@/pages/movies/hooks/useMovies';

export const MoviesList: FC = () => {
	const { isLoading, data, handleSearch, searchTerm, deleteAsync } = useMovies();

	console.log(data);

	return (
		<Meta title="Movies">
			<AdminNavigation />
			<Heading title="Movies" />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			{isLoading ? (
				<SkeletonLoader className="mt-8" height={46} />
			) : (
				<AdminTable
					removeHandler={deleteAsync}
					isLoading={isLoading}
					headerItems={['Title', 'Genre', 'Rating']}
					tableItems={data as unknown as ITableItem[] | []}
				/>
			)}
		</Meta>
	);
};
