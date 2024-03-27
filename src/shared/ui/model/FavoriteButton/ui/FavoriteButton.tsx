import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './FavoriteButton.module.scss';

import { useFavorites } from '@/shared/hooks/useFavorites';
import { useActions } from '@/shared/hooks/useActions';
import { IMovie } from '@/shared/types/movie.types';

export const FavoriteButton: FC<{ movie: IMovie }> = ({ movie }) => {
	const [isSmashed, setIsSmashed] = useState(false);
	const { addItemFavorites, removeItemFavorites } = useActions();
	const { favorites } = useFavorites();

	console.log(favorites);

	useEffect(() => {
		if (!favorites) return;

		const isHasMovie = favorites?.some(f => f.id === movie.id);
		if (isSmashed !== isHasMovie) setIsSmashed(!!isHasMovie);
	}, [favorites, isSmashed, movie.id]);

	return (
		<button
			onClick={() => {
				if (isSmashed === true) {
					removeItemFavorites(movie.id);
					setIsSmashed(false);
				} else {
					addItemFavorites(movie);
					setIsSmashed(true);
				}
			}}
			className={cn(styles.button, { [styles.animate]: isSmashed })}
			style={{ backgroundImage: `url('/heart-animation.png')` }}
		/>
	);
};
