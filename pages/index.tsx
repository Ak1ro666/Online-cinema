import { getActorUrl, getOneMovieUrl } from '@/shared/config/url.config'
import { GetStaticProps, NextPage } from 'next'

import { Home } from '@/pages/home'
import { IHome } from '@/pages/home/types/home.interface'
import { ActorService } from '@/shared/services/actor.service'
import { MovieService } from '@/shared/services/movie.service'
import { getGenresList } from '@/shared/utils/movie/getGenresListEach'
import { IGalleryItem } from '@/widgets/Gallery/types/gallery.interface'
import { ISlide } from '@/widgets/Slider/types/slider.interface'

const HomePage: NextPage<IHome> = ({ slides, actors, trendingMovies }) => {
	return <Home slides={slides} actors={actors} trendingMovies={trendingMovies} />;
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll();
		const { data: dataActors } = await ActorService.getAll();
		const { data: dataMovie } = await MovieService.getMostPopularMovies();

		const slides: ISlide[] = movies.slice(0, 3).map(m => ({
			id: m.id,
			link: getOneMovieUrl(m.slug),
			bigPoster: m.bigPoster,
			subTitle: getGenresList(m.genres),
			title: m.title,
		}));

		const actors: IGalleryItem[] = dataActors.slice(0, 7).map(a => ({
			name: a.name,
			posterPath: a.photo,
			link: getActorUrl(`/${a.slug}`),
			content: {
				title: a.name,
				subTitle: `+${a.countMovies} movies`,
			},
		}));

		const trendingMovies: IGalleryItem[] = dataMovie.slice(0, 7).map(a => ({
			name: a.title,
			posterPath: a.poster,
			link: getOneMovieUrl(a.slug),
		}));

		return {
			props: {
				slides,
				trendingMovies,
				actors,
			} as IHome,
			revalidate: 60
		};
	} catch (error) {
		return {
			props: {
				slides: [],
				actors: [],
				trendingMovies: [],
			},
		};
	}
};

export default HomePage;
