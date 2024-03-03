import { FC } from 'react';

import { IAdminTableItem } from '@/shared/types/admin-table.types';
import { AdminActions } from '@/shared/ui/model/AdminActions';

import styles from './AdminTableItem.module.scss';

export const AdminTableItem: FC<IAdminTableItem> = ({ removeHandler, tableItem }) => {
	return (
		<div className={styles.item}>
			<div>{tableItem.email}</div>
			<AdminActions editUrl={tableItem.editUrl} removeHandler={() => removeHandler(tableItem.id)} />
		</div>
	);
};
