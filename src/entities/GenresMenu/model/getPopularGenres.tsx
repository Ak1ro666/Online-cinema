import { IMenuItem } from '@/shared/ui/Menu';
import { genresService } from '../../../shared/services/genres.service';
import { useQuery } from 'react-query';

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
							link: genre.link,
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
