import { useRouter } from 'next/router';
import { FC } from 'react';

import { MaterialIcon } from '@/shared/ui/ui/MaterialIcon';

import styles from './AdminActions.module.scss';

interface IAdminActionsProps {
	editUrl: string;
	removeHandler: () => void;
}

export const AdminActions: FC<IAdminActionsProps> = ({ editUrl, removeHandler }) => {
	const { push } = useRouter();

	return (
		<div className={styles.action}>
			<button className={styles['action-button']} onClick={() => push(editUrl)}>
				<MaterialIcon name="MdEdit" />
			</button>
			<button className={styles['action-button']} onClick={removeHandler}>
				<MaterialIcon name="MdClose" />
			</button>
		</div>
	);
};
