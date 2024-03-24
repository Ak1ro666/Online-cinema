import { GetStaticPaths, GetStaticProps } from 'next';
import { IActor, IMovie } from '@/shared/types/movie.types';

import { ActorService } from '@/shared/services/actor.service';
import { Catalog } from '@/widgets/Catalog';
import { MovieService } from '@/shared/services/movie.service';
import { NextAuthPage } from '@/pages/auth/types/auth.types';
import NotFoundPage from 'pages/404';

interface IGenrePage {
	movies: IMovie[];
	actor: IActor[];
}

const GenrePage: NextAuthPage<IGenrePage> = ({ movies, actor }) => {
	console.log(movies)

	return actor ? <Catalog title={actor[0].name || ''} movies={movies || []} /> : <NotFoundPage />;
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: genres } = await ActorService.getAll();

	const paths = genres.map((actor: IActor) => ({
		params: { slug: actor.slug },
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
		const { data: actor } = await ActorService.getBySlug(String(params?.slug));
		const { data: movies } = await MovieService.getByActor(
			String(params?.slug).charAt(0).toUpperCase() + String(params?.slug).slice(1),
		);

		return {
			props: {
				movies,
				actor,
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
