import { FC } from 'react';

import styles from './Favorites.module.scss';
import Meta from '@/shared/utils/meta/Meta';
import { Heading } from '@/shared/ui/ui/Heading';
import { useFavorites } from '@/shared/hooks/useFavorites';
import { FavoriteItem } from '@/shared/ui/model/FavoriteItem';

export const Favorites: FC = () => {
	const { favorites } = useFavorites();

	return (
		<Meta title="Favorites">
			<Heading title='Favorites'></Heading>
			<section className={styles.favorites}>
				{favorites?.map(favorite => <FavoriteItem key={favorite.id} movie={favorite} />)}
			</section>
		</Meta>
	);
};
