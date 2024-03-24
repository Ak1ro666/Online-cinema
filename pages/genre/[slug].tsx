import { GetStaticPaths, GetStaticProps } from 'next';
import { IGenre, IMovie } from '@/shared/types/movie.types';

import { Catalog } from '@/widgets/Catalog';
import { GenreService } from '@/shared/services/genre.service';
import { MovieService } from '@/shared/services/movie.service';
import { NextAuthPage } from '@/pages/auth/types/auth.types';
import NotFoundPage from 'pages/404';

interface IGenrePage {
	movies: IMovie[];
	genre: IGenre[];
}

const GenrePage: NextAuthPage<IGenrePage> = ({ movies, genre }) => {
	return genre ? (
		<Catalog title={genre[0].name || ""} description={genre[0].description || ""} movies={movies || []} />
	) : (
		<NotFoundPage />
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: genres } = await GenreService.getPopular();

	const paths = genres.map((genre: IGenre) => ({
		params: { slug: genre.slug },
	}));

	return {
		paths,
		fallback: "blocking"
	}
	
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		};	
	}
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: genre } = await GenreService.getBySlug(String(params?.slug));
		const { data: movies } = await MovieService.getByGenres(
			String(params?.slug).charAt(0).toUpperCase() + String(params?.slug).slice(1),
		);

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
				notFound: true,
			},
		};
	}
};

export default GenrePage;
