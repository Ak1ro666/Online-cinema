import { Banner } from '@/shared/ui/model/Banner'
import { Content } from '@/shared/ui/model/Content'
import { FC } from 'react'
import { Gallery } from '@/widgets/Gallery'
import { IMoviePage } from 'pages/movie/[slug]'
import Meta from '@/shared/utils/meta/Meta'
import { SubHeading } from '@/shared/ui/ui/SubHeading'

export const SingleMovie: FC<IMoviePage> = ({ similarMovies, movie }) => {

	return <Meta title={String(movie[0].title)} description={`Watch ${movie[0].title}`}>
		<Banner image={movie[0].bigPoster} Detail={() => <Content movie={movie[0]} />} />

		{/* TODO: Video player */}

		<div className='mt-12'>
			<SubHeading title='Similar' />
			<Gallery items={similarMovies} />
		</div>

		{/* TODO: Rating */}
	</Meta>
}
