import { GetStaticPaths, GetStaticProps } from 'next'

import { IGalleryItem } from '@/widgets/Gallery/types/gallery.interface'
import { IMovie } from '@/shared/types/movie.types'
import { MovieService } from '@/shared/services/movie.service'
import { NextAuthPage } from '@/pages/auth/types/auth.types'
import NotFoundPage from 'pages/404'
import { SingleMovie } from '@/pages/single-movie'
import { getOneMovieUrl } from '@/shared/config/url.config'

export interface IMoviePage {
	similarMovies: IGalleryItem[];
	movie: IMovie[];
}

const MoviePage: NextAuthPage<IMoviePage> = ({ similarMovies, movie }) => {

	return movie ? (
		<SingleMovie similarMovies={similarMovies || []} movie={movie || []} />
	) : (
		<NotFoundPage />
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: movies } = await MovieService.getAll();

		const paths = movies.map((movie: IMovie) => ({
			params: { slug: movie.slug.replace('/', '') },
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
		const { data: movie } = await MovieService.getBySlug(String(`/${params?.slug}`));
		const { data: dataSimilarMovies } = await MovieService.getAll();

		const similarMovies: IGalleryItem[] = dataSimilarMovies
  .filter(similarMovie => 
    similarMovie.title !== movie[0].title &&
    similarMovie.genres.some(simGenre =>
      movie[0].genres.some(movieGenre => movieGenre.name === simGenre.name)
    )
  )
  .slice(0, 7)
  .map(movie => ({
    name: movie.title,
    posterPath: movie.poster,
    link: getOneMovieUrl(movie.slug),
  }));

		return {
			props: {
				similarMovies,
				movie,
			},
			revalidate: 60
		};
	} catch (error) {
		return {
			props: {
				movies: [],
				movie: {},
				notFound: true,
			},
		};
	}
};

export default MoviePage;
