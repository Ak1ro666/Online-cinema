import { GetStaticProps } from 'next';

import { MovieService } from '@/shared/services/movie.service';
import { IMovie } from '@/shared/types/movie.types';

import { NextAuthPage } from '@/pages/auth/types/auth.types';
import { Catalog } from '@/widgets/Catalog';

const TrendingPage: NextAuthPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			title="Trending movies"
			description="Trending  movies and series excellent quality: legal, safe, without ads"
			movies={movies || []}
		/>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data } = await MovieService.getMostPopularMovies();

		const movies = data.sort((a, b) => b.rating - a.rating);

		return {
			props: {
				movies,
			},
		};
	} catch (error) {
		return {
			props: {
				movies: [],
			},
		};
	}
};

export default TrendingPage;
