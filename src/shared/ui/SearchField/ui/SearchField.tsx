import { ChangeEvent, FC, InputHTMLAttributes } from 'react';

import { MaterialIcon } from '@/shared/ui/MaterialIcon';

import styles from './SearchField.module.scss';

interface ISearchField extends InputHTMLAttributes<HTMLInputElement> {
	searchTerm: string;
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchField: FC<ISearchField> = props => {
	const { searchTerm, handleSearch } = props;

	return (
		<div className={styles.search}>
			<MaterialIcon name={'MdSearch'} />
			<input placeholder={'Search'} value={searchTerm} onChange={handleSearch} />
		</div>
	);
};
