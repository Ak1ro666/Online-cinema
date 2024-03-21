import { GetStaticPaths, GetStaticProps } from 'next';
import { IGenre, IMovie } from '@/shared/types/movie.types';

import { Catalog } from '@/widgets/Catalog';
import { GenreService } from '@/shared/services/genre.service';
import { MovieService } from '@/shared/services/movie.service';
import { NextAuthPage } from '@/pages/auth/types/auth.types';

interface IGenrePage {
	movies: IMovie[];
	genre: IGenre[];
}

const GenrePage: NextAuthPage<IGenrePage> = ({ movies, genre }) => {
	// const dataMovies = movies.filter((movie: IMovie) =>
	// 	movie.genres.some(movieGenre => movieGenre.name === genre[0].name),
	// );

	return <Catalog title={genre[0].name} description={genre[0].description} movies={movies || []} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: genres } = await GenreService.getPopular();

	const paths = genres.map((genre: IGenre) => ({
		params: { slug: genre.slug, fallback: 'blocking' },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: genre } = await GenreService.getBySlug(String(params?.slug));
		const { data: movies } = await MovieService.getByGenres(String(params?.slug).charAt(0).toUpperCase() + String(params?.slug).slice(1));
		
		
		return {
			props: {
				movies,
				genre,
			},
		};
	} catch (error) {
		return {
			props: {
				movies: [],
				genre: {},
			},
		};
	}
};

export default GenrePage;
