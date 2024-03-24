import { Description } from '@/shared/ui/model/Description'
import { FC } from 'react'
import { GalleryItem } from '@/entities/GalleyItem'
import { Heading } from '@/shared/ui/ui/Heading'
import { ICatalog } from '../types/catalog.interface'
import Meta from '@/shared/utils/meta/Meta'
import { SubHeading } from '@/shared/ui/ui/SubHeading'
import { getOneMovieUrl } from '@/shared/config/url.config'
import styles from './Catalog.module.scss'

export const Catalog: FC<ICatalog> = ({ title, description, movies }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />

			{description && <Description text={description} className={styles.description} />}

			<section className={styles.movies}>
				{movies.length ? (
					movies.map(movie => (
						<GalleryItem
							key={movie.id}
							item={{
								name: movie.title,
								link: getOneMovieUrl(movie.slug),
								posterPath: movie.bigPoster,
								content: {
									title: movie.title,
								},
							}}
							variant="horizontal"
						/>
					))
				) : (
					<SubHeading title="Not found movies!" />
				)}
			</section>
		</Meta>
	);
};
