import { FC } from 'react';
import { Gallery } from '@/entities/gallery';
import { Heading } from '@/shared/ui/ui/Heading';
import { IHome } from '../types/home.interface';
import Meta from '@/shared/utils/meta/Meta';
import { Slider } from '@/entities/Slider';
import { SubHeading } from '@/shared/ui/ui/SubHeading';

export const Home: FC<IHome> = ({ slides, actors, trendingMovies }) => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online or stream right to your browser."
		>
			<Heading title="Watch movies online" className="text-gray-500 mb-8 text-xl" />

			{slides.length && <Slider slides={slides} />}

			<div className="my-10">
				<SubHeading title="Trending now" />
				{trendingMovies.length && <Gallery items={trendingMovies} />}
			</div>

			<div>
				<SubHeading title="Best actors" />
				{actors.length && <Gallery items={actors} />}
			</div>
		</Meta>
	);
};
