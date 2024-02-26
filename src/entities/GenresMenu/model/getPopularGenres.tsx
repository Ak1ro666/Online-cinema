import { useQuery } from 'react-query';

import { genresService } from '@/shared/services/genres.service';
import { IMenuItem } from '@/shared/ui/Menu';

export const usePopularGenres = () => {
	const queryData = useQuery({
		queryKey: ['popularGenres'],
		queryFn: () => genresService.getPopularGenres(),
		select: ({ data }) =>
			data
				.map(
					genre =>
						({
							icon: genre.icon,
							link: genre.slug,
							title: genre.name,
						}) as IMenuItem,
				)
				.splice(0, 4),

		onError(error) {
			throw new Error(`Error >>> ${error}`);
		},
	});

	return queryData;
};
