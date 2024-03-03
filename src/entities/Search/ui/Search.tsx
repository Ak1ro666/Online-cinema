import { FC } from 'react';

import styles from './Search.module.scss';
import { useSearch } from '@/entities/Search';
import { SearchField } from '@/entities/Search/ui/SearchField';
import { SearchList } from '@/entities/Search/ui/SearchList';

export const Search: FC = () => {
	const { data, isSuccess, handleSearch, searchTerm } = useSearch();

	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	);
};
