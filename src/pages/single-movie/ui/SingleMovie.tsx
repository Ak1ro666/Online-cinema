import { Banner } from '@/shared/ui/model/Banner';
import { Content } from '@/shared/ui/model/Content';
import { FC } from 'react';
import { Gallery } from '@/widgets/Gallery';
import { IMoviePage } from 'pages/movie/[slug]';
import Meta from '@/shared/utils/meta/Meta';
import { SubHeading } from '@/shared/ui/ui/SubHeading';
import dynamic from 'next/dynamic';

const DynamicVideoPlayer = dynamic(() => import('@/widgets/VideoPlayer').then(module => module.VideoPlayer), {
	ssr: false,
});

const DynamicRateMovie = dynamic(() => import('@/widgets/RateMovie').then(module => module.RateMovie), {
	ssr: false,
});

export const SingleMovie: FC<IMoviePage> = ({ similarMovies, movie }) => {
	return (
		<Meta title={String(movie[0].title)} description={`Watch ${movie[0].title}`}>
			<Banner image={movie[0].bigPoster} Detail={() => <Content movie={movie[0]} />} />

			<DynamicVideoPlayer slug={movie[0].slug} videoSources={movie[0].videoUrl} />

			<div className="mt-12">
				<SubHeading title="Similar" />
				<Gallery items={similarMovies} />
			</div>

			<DynamicRateMovie id={movie[0].id} slug={movie[0].slug} />
		</Meta>
	);
};
