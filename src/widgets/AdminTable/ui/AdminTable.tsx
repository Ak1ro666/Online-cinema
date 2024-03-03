import { FC } from 'react';

import { ITableItem } from '@/shared/types/admin-table.types';
import { AdminTableHeader } from '@/shared/ui/model/AdminTableHeader';
import { AdminTableItem } from '@/shared/ui/model/AdminTableItem';
import { SkeletonLoader } from '@/shared/ui/ui/SkeletonLoader';

import styles from './AdminTable.module.scss';

interface IAdminTableProps {
	searchTerm: string;
	tableItems: ITableItem[];
	isLoading: boolean;
	headerItems: string[];
	removeHandler: (id: number) => void;
}

export const AdminTable: FC<IAdminTableProps> = props => {
	const { tableItems, isLoading, headerItems, removeHandler, searchTerm } = props;

	return (
		<div>
			<AdminTableHeader headerItems={headerItems} />

			{isLoading ? (
				<SkeletonLoader count={1} height={48} className="mt-4" />
			) : tableItems.length ? (
				tableItems.map(tableItem => (
					<AdminTableItem key={tableItem.id} removeHandler={() => removeHandler(tableItem.id)} tableItem={tableItem} />
				))
			) : (
				<div className={styles.notFound}>Elements not found</div>
			)}
		</div>
	);
};
