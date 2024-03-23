import { GetStaticProps, NextPage } from 'next';
import { getActorUrl, getMovieUrl } from '@/shared/config/url.config';

import { ActorService } from '@/shared/services/actor.service';
import { Home } from '@/pages/home';
import { IGalleryItem } from '@/entities/Gallery/types/gallery.interface';
import { IHome } from '@/pages/home/types/home.interface';
import { ISlide } from '@/entities/Slider/types/slider.interface';
import { MovieService } from '@/shared/services/movie.service';
import { getGenresList } from '@/shared/utils/movie/getGenresListEach';

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
			link: getMovieUrl(m.slug),
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
			link: getMovieUrl(a.slug),
		}));

		return {
			props: {
				slides,
				trendingMovies,
				actors,
			} as IHome,
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
