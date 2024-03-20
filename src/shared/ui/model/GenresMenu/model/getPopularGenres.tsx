import { GenreService } from '@/shared/services/genre.service';
import { IMenuItem } from '@/shared/ui/model/Menu';
import { useQuery } from 'react-query';

export const usePopularGenres = () => {
	const queryData = useQuery({
		queryKey: ['popularGenres'],
		queryFn: () => GenreService.getPopular(),
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
