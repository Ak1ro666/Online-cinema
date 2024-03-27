import { getActorUrl, getGenreUrl } from '@/shared/config/url.config';

import { ContentList } from '@/widgets/ContentList';
import { FC } from 'react';
import { IMovie } from '@/shared/types/movie.types';
import { MaterialIcon } from '@/shared/ui/ui/MaterialIcon';
import styles from './Content.module.scss';
import { FavoriteButton } from '@/shared/ui/model/FavoriteButton';

export const Content: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.content}>
			<h1>{movie.title}</h1>
			<div className={styles.details}>
				<span>{movie.parameters.year} · </span>
				<span>{movie.parameters.country} · </span>
				<span>{movie.parameters.duration} min.</span>
			</div>

			<ContentList
				name="Genres"
				links={movie.genres.slice(0, 3).map(g => ({
					id: String(g.id),
					link: getGenreUrl(`/${g.slug}`),
					title: g.name,
				}))}
			/>

			<ContentList
				name="Actors"
				links={movie.actors.slice(0, 3).map(a => ({
					id: String(a.id),
					link: getActorUrl(`/${a.slug}`),
					title: a.name,
				}))}
			/>

			<div className={styles.rating}>
				<MaterialIcon name="MdStarRate" />
				<span>{movie.rating.toFixed(1)}</span>
			</div>

			<FavoriteButton movie={movie} />
		</div>
	);
};
