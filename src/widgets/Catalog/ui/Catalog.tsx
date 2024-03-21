import { Description } from '@/shared/ui/model/Description';
import { FC } from 'react';
import { GalleryItem } from '@/shared/ui/model/GalleyItem';
import { Heading } from '@/shared/ui/ui/Heading';
import { ICatalog } from '../types/catalog.interface';
import Meta from '@/shared/utils/meta/Meta';
import { getMovieUrl } from '@/shared/config/url.config';
import styles from './Catalog.module.scss'

export const Catalog: FC<ICatalog> = ({ title, description, movies }) => {

	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />

			{description && <Description text={description} className={styles.description} />}

			<section className={styles.movies}>
				{movies.map(movie => (
					<GalleryItem
						key={movie.id}
						item={{
							name: movie.title,
							link: getMovieUrl(movie.slug),
							posterPath: movie.bigPoster,
							content: {
								title: movie.title,
							},
						}}
						variant="horizontal"
					/>
				))}
			</section>
		</Meta>
	);
};
 