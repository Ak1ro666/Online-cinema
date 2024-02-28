import { FC } from 'react';

import { SearchField } from '@/shared/ui/model/SearchField';
import { SearchList } from '@/shared/ui/model/SearchList';

import styles from './Search.module.scss';
import { useSearch } from '@/entities/Search';

export const Search: FC = () => {
	const { data, isSuccess, handleSearch, searchTerm } = useSearch();

	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	);
};
