import { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';

import useDebounce from '@/shared/hooks/useDebounce';
import { MovieService } from '@/shared/services/movies.service';

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const debouncedSearch = useDebounce(searchTerm, 500);

	const { isSuccess, data } = useQuery({
		queryKey: ['search', debouncedSearch],
		queryFn: () => MovieService.allMovies(),
		select: ({ data }) =>
			data.filter(movie =>
				movie.title.toLowerCase().replace(/\s+/g, '').includes(debouncedSearch.toLowerCase().replace(/\s+/g, '')),
			),
		enabled: !!debouncedSearch,
	});

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return { isSuccess, handleSearch, data, searchTerm };
};
