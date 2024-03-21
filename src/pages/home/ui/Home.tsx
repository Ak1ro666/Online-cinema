import { FC } from 'react';

import { Heading } from '@/shared/ui/ui/Heading';
import { SubHeading } from '@/shared/ui/ui/SubHeading';
import Meta from '@/shared/utils/meta/Meta';

import { IHome } from '../types/home.interface';

import { Gallery } from '@/entities/Gallery';
import { Slider } from '@/entities/Slider';

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
