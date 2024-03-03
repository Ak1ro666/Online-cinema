import { FC } from 'react';

import { ITableItem } from '@/shared/types/admin-table.types';
import { AdminHeader } from '@/shared/ui/model/AdminHeader';
import { Heading } from '@/shared/ui/ui/Heading';
import { SkeletonLoader } from '@/shared/ui/ui/SkeletonLoader';
import Meta from '@/shared/utils/meta/Meta';

import { useGenres } from '@/pages/genres/hooks/useGenres';
import { AdminNavigation } from '@/widgets/AdminNavigation';
import { AdminTable } from '@/widgets/AdminTable';

export const GenresList: FC = () => {
	const { isLoading, data, handleSearch, searchTerm, deleteAsync } = useGenres();

	return (
		<Meta title="Genres">
			<AdminNavigation />
			<Heading title="Genres" />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			{isLoading ? (
				<SkeletonLoader className="mt-8" height={46} />
			) : (
				<AdminTable
					removeHandler={deleteAsync}
					isLoading={isLoading}
					headerItems={['Name', 'Slug']}
					tableItems={data as unknown as ITableItem[] | []}
				/>
			)}
		</Meta>
	);
};
