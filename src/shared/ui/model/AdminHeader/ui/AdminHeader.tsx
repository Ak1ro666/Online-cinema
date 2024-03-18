import { ChangeEvent, FC } from 'react';

import { SearchField } from '@/entities/Search/ui/SearchField';
import styles from './AdminHeader.module.scss';

interface IAdminHeaderProps {
	searchTerm: string;
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const AdminHeader: FC<IAdminHeaderProps> = props => {
	const { searchTerm, handleSearch } = props;

	return (
		<div className={styles.header}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
		</div>
	);
};
