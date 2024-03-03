import { FC } from 'react';

import { ITableItem } from '@/shared/types/admin-table.types';
import { AdminHeader } from '@/shared/ui/model/AdminHeader';
import { Heading } from '@/shared/ui/ui/Heading';
import { SkeletonLoader } from '@/shared/ui/ui/SkeletonLoader';
import Meta from '@/shared/utils/meta/Meta';

import { useActors } from '@/pages/actors/hooks/useActors';
import { AdminNavigation } from '@/widgets/AdminNavigation';
import { AdminTable } from '@/widgets/AdminTable';

export const ActorsList: FC = () => {
	const { isLoading, data, handleSearch, searchTerm, deleteAsync } = useActors();

	return (
		<Meta title="Actors">
			<AdminNavigation />
			<Heading title="Actors" />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			{isLoading ? (
				<SkeletonLoader className="mt-8" height={46} />
			) : (
				<AdminTable
					removeHandler={deleteAsync}
					isLoading={isLoading}
					headerItems={['Name', 'Count movies']}
					tableItems={data as unknown as ITableItem[] | []}
				/>
			)}
		</Meta>
	);
};
