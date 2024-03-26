import { useAuth } from '@/shared/hooks/useAuth';
import { useRateMovie } from '@/widgets/RateMovie/hooks/useRateMovie';
import { FC } from 'react';
import { AuthButton } from '@/shared/ui/model/AuthButton';

import StarRating from 'react-star-rating-component';

import styles from './RateMovie.module.scss';

interface IRateMovie {
	id: number;
	slug: string;
}

export const RateMovie: FC<IRateMovie> = ({ id, slug }) => {
	const { user } = useAuth();

	const { handleClick, isSended, rating } = useRateMovie(id);

	return (
		<div className={styles.wrapper}>
			<h3>How do you like the movie?</h3>
			<p>Ratings improve recommendation</p>
			{user ? (
				<>
					{isSended ? (
						<div className={styles.thanks}>Thanks for rating!</div>
					) : (
						<StarRating name="star-rating" value={rating} onStarClick={handleClick} emptyStarColor='#4f4f4f' />
					)}
				</>
			) : (
				<AuthButton slug={slug} />
			)}
		</div>
	);
};
