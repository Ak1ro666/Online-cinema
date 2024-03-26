import { RatingService } from '@/shared/services/rating.service';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

export const useRateMovie = (movieId: number) => {
	const [rating, setRating] = useState(0);
	const [isSended, setIsSended] = useState(false);

	const { refetch } = useQuery({
		queryKey: ['your movie rate', movieId],
		queryFn: () => RatingService.getByUserMovie(movieId),
		onSuccess: ({ data }) => {
			setRating(data[0].rating);
		},
		onError: error => {
			toastr.error(error as unknown as string, 'Get genre');
		},
		enabled: !!movieId,
	});

	const { mutateAsync } = useMutation({
		mutationKey: ['set rating movie'],
		mutationFn: ({ value }: { value: number }) => RatingService.setRating(movieId, value),
		onSuccess: () => {
			toastr.success('Rate movie', 'You have successfully rated!');

			setIsSended(true);
			refetch();

			setTimeout(() => {
				setIsSended(false);
			}, 2400);
		},
	});

	const handleClick = async (nextValue: number) => {
		setRating(nextValue);
		mutateAsync({ value: nextValue });
	};

	return {
		isSended,
		rating,
		handleClick,
	};
};
